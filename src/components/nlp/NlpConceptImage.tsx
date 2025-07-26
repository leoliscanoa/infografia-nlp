import type { FC } from 'react';

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
      <img
        src={imageSrc}
        alt={`Image for: ${conceptDescription.substring(0, 50)}...`}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};
