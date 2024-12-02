import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Question } from '@/types';

interface QuestionCardProps {
  question: Question;
  index: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, index }) => {
  return (
    <Box p={4} bg="gray.50" borderRadius="md" mb={2}>
      <Text>
        {index + 1}. {question.text}
      </Text>
      <Text fontSize="sm" color="gray.600">
        Marks: {question.marks}
      </Text>
    </Box>
  );
};
