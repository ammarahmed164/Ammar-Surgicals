// product-recommendations.ts
'use server';
/**
 * @fileOverview AI-powered product recommendations based on viewing history.
 *
 * - productRecommendations - A function that handles the product recommendation process.
 * - ProductRecommendationsInput - The input type for the productRecommendations function.
 * - ProductRecommendationsOutput - The return type for the productRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationsInputSchema = z.object({
  viewingHistory: z
    .array(z.string())
    .describe('An array of product IDs representing the customer viewing history.'),
});
export type ProductRecommendationsInput = z.infer<typeof ProductRecommendationsInputSchema>;

const ProductRecommendationsOutputSchema = z.object({
  recommendedProducts: z
    .array(z.string())
    .describe('An array of product IDs representing the recommended products.'),
  reason: z.string().describe('The reason for recommending these products.'),
});
export type ProductRecommendationsOutput = z.infer<typeof ProductRecommendationsOutputSchema>;

export async function productRecommendations(input: ProductRecommendationsInput): Promise<ProductRecommendationsOutput> {
  return productRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: ProductRecommendationsInputSchema},
  output: {schema: ProductRecommendationsOutputSchema},
  prompt: `You are an expert e-commerce product recommendation system.

  Based on the customer's viewing history, recommend products that they might be interested in.
  Return a list of product IDs and a reason for the recommendation.

  Viewing History: {{#each viewingHistory}}{{{this}}}, {{/each}}
  `,
});

const productRecommendationsFlow = ai.defineFlow(
  {
    name: 'productRecommendationsFlow',
    inputSchema: ProductRecommendationsInputSchema,
    outputSchema: ProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
