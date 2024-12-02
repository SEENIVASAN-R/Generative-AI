import React from 'react';
import { Box, VStack, Heading, Text, Divider } from '@chakra-ui/react';
import { Question } from '../types';

interface QuestionListProps {
  shortQuestions: Question[];
  longQuestions: Question[];
}

export const QuestionList: React.FC<QuestionListProps> = ({
  shortQuestions,
  longQuestions,
}) => {
  return (
    <VStack spacing={6} align="stretch" w="100%">
      <Box>
        <Heading size="md" mb={4}>
          Short Questions (2 Marks)
        </Heading>
        {shortQuestions.map((question, index) => (
          <Box key={index} p={4} bg="gray.50" borderRadius="md" mb={2}>
            <Text>
              {index + 1}. {question.text}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Marks: {question.marks}
            </Text>
          </Box>
        ))}
      </Box>

      <Divider />

      <Box>
        <Heading size="md" mb={4}>
          Long Questions (16 Marks)
        </Heading>
        {longQuestions.map((question, index) => (
          <Box key={index} p={4} bg="gray.50" borderRadius="md" mb={2}>
            <Text>
              {index + 1}. {question.text}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Marks: {question.marks}
            </Text>
          </Box>
        ))}
      </Box>
    </VStack>
  );
};
