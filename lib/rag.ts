import { medicalDocuments } from './medical-data';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Simple TF-IDF-like search for finding relevant documents
export function searchRelevantDocs(query: string, topK: number = 2): string {
  if (!query.trim()) return '';

  const queryTerms = query.toLowerCase().split(/\s+/);
  
  const scoredDocs = medicalDocuments.map(doc => {
    const contentLower = (doc.title + ' ' + doc.content).toLowerCase();
    const score = queryTerms.filter(term => contentLower.includes(term)).length;
    return { ...doc, score };
  });

  const topDocs = scoredDocs
    .filter(doc => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);

  if (topDocs.length === 0) {
    return medicalDocuments.slice(0, 2).map(d => d.content).join('\n\n');
  }

  return topDocs.map(doc => `${doc.title}: ${doc.content}`).join('\n\n');
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding;
}

export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  const dotProduct = a.reduce((sum, av, i) => sum + av * b[i], 0);
  const magnitudeA = Math.sqrt(a.reduce((sum, av) => sum + av * av, 0));
  const magnitudeB = Math.sqrt(b.reduce((sum, bv) => sum + bv * bv, 0));
  return magnitudeA && magnitudeB ? dotProduct / (magnitudeA * magnitudeB) : 0;
}
