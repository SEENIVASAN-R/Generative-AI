import { Question, FileContent } from '@/types';

export const generateQuestionsFromAI = async (content: string): Promise<Question[]> => {
  // In a real application, this would make an API call to an AI service
  // For now, we'll use a simple implementation
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 20);
  const questions: Question[] = [];

  // Generate short questions (2 marks)
  for (let i = 0; i < Math.min(5, sentences.length); i++) {
    const sentence = sentences[i].trim();
    if (sentence) {
      questions.push({
        marks: 2,
        text: `Explain briefly: ${sentence}`,
        type: 'short'
      });
    }
  }

  // Generate long questions (16 marks)
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 100);
  for (let i = 0; i < Math.min(3, paragraphs.length); i++) {
    const paragraph = paragraphs[i].trim();
    if (paragraph) {
      questions.push({
        marks: 16,
        text: `Discuss in detail: ${paragraph.substring(0, 150)}...`,
        type: 'long'
      });
    }
  }

  return questions;
};
