export interface Question {
  marks: number;
  text: string;
  type: 'short' | 'long';
}

export interface GeneratedQuestions {
  shortQuestions: Question[];
  longQuestions: Question[];
}

export interface FileContent {
  name: string;
  content: string;
}
