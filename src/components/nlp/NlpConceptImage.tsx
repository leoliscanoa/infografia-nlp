'use client';

import type { FC } from 'react';
import Image from 'next/image';

type NlpConceptImageProps = {
  conceptDescription: string;
  imageSrc: string;
};

export const NlpConceptImage: FC<NlpConceptImageProps> = ({ conceptDescription, imageSrc }) => {
  return (
    <div className="w-full h-48 relative overflow-hidden rounded-lg bg-muted/20">
      {/* 
        Prompt for this image: 
        Generate an image that visually represents the following NLP concept: ${conceptDescription}
      */}
      <Image
        src={imageSrc}
        alt={`Image for: ${conceptDescription.substring(0, 50)}...`}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};
