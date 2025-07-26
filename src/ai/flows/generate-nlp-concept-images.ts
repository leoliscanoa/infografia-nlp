'use server';
/**
 * @fileOverview This file defines a Genkit flow to generate AI images for NLP concepts used in the infographic.
 *
 * The flow takes a description of an NLP concept and returns a data URI containing a base64-encoded PNG image.
 * - generateNlpConceptImage - The main function that triggers the image generation.
 * - GenerateNlpConceptImageInput - The input type for the generateNlpConceptImage function.
 * - GenerateNlpConceptImageOutput - The return type for the generateNlpConceptImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateNlpConceptImageInputSchema = z.object({
  conceptDescription: z
    .string()
    .describe('A description of the NLP concept to generate an image for.'),
});
export type GenerateNlpConceptImageInput = z.infer<typeof GenerateNlpConceptImageInputSchema>;

const GenerateNlpConceptImageOutputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      'A data URI containing a base64-encoded PNG image representing the NLP concept.'
    ),
});
export type GenerateNlpConceptImageOutput = z.infer<typeof GenerateNlpConceptImageOutputSchema>;

export async function generateNlpConceptImage(
  input: GenerateNlpConceptImageInput
): Promise<GenerateNlpConceptImageOutput> {
  return generateNlpConceptImageFlow(input);
}

const generateNlpConceptImageFlow = ai.defineFlow(
  {
    name: 'generateNlpConceptImageFlow',
    inputSchema: GenerateNlpConceptImageInputSchema,
    outputSchema: GenerateNlpConceptImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate an image that visually represents the following NLP concept: ${input.conceptDescription}`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media || !media.url) {
      throw new Error('No image was generated.');
    }

    return {imageDataUri: media.url};
  }
);
