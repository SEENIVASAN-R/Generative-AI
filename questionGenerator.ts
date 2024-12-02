import { Question, FileContent } from '../types';

const generateShortQuestions = (content: string): Question[] => {
  // This is a simple implementation. In a real application, you would use
  // more sophisticated NLP techniques or AI models to generate questions.
  const sentences = content.split(/[.!?]+/).filter(s => s.trim().length > 20);
  const questions: Question[] = [];

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

  return questions;
};

const generateLongQuestions = (content: string): Question[] => {
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 100);
  const questions: Question[] = [];

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

export const generateQuestions = async (file: FileContent) => {
  const shortQuestions = generateShortQuestions(file.content);
  const longQuestions = generateLongQuestions(file.content);

  return {
    shortQuestions,
    longQuestions
  };
};
