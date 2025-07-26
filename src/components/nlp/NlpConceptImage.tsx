'use client';

import { useState, useEffect, type FC } from 'react';
import Image from 'next/image';
import { generateNlpConceptImage } from '@/ai/flows/generate-nlp-concept-images';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

type NlpConceptImageProps = {
  conceptDescription: string;
};

export const NlpConceptImage: FC<NlpConceptImageProps> = ({ conceptDescription }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const generateImage = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await generateNlpConceptImage({ conceptDescription });
        if (isMounted) {
          setImageUrl(result.imageDataUri);
        }
      } catch (e) {
        if (isMounted) {
          setError('Failed to generate image.');
          console.error(e);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    generateImage();

    return () => {
      isMounted = false;
    };
  }, [conceptDescription]);

  if (isLoading) {
    return <Skeleton className="w-full h-48 rounded-lg bg-muted/50" />;
  }

  if (error) {
    return (
      <div className="h-48 flex items-center justify-center bg-card rounded-lg border border-destructive/50">
        <Alert variant="destructive" className="w-auto border-none">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="w-full h-48 relative overflow-hidden rounded-lg bg-muted/20">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={`AI generated image for: ${conceptDescription.substring(0, 30)}...`}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      )}
    </div>
  );
};
