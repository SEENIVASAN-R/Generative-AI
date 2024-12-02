import React, { useState } from 'react';
import {
  ChakraProvider,
  Container,
  VStack,
  Heading,
  Text,
  useToast,
} from '@chakra-ui/react';
import { FileUploader } from './components/FileUploader';
import { QuestionList } from './components/QuestionList';
import { generateQuestions } from './utils/questionGenerator';
import { Question, FileContent } from './types';

function App() {
  const [questions, setQuestions] = useState<{
    shortQuestions: Question[];
    longQuestions: Question[];
  }>({
    shortQuestions: [],
    longQuestions: [],
  });
  const toast = useToast();

  const handleFileUpload = async (files: File[]) => {
    try {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = async (e) => {
        const content = e.target?.result as string;
        const fileContent: FileContent = {
          name: file.name,
          content,
        };

        const generatedQuestions = await generateQuestions(fileContent);
        setQuestions(generatedQuestions);

        toast({
          title: 'Questions Generated',
          description: 'Your questions have been generated successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      };

      reader.readAsText(file);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to generate questions. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <ChakraProvider>
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Heading textAlign="center">AI Question Generator</Heading>
          <Text textAlign="center" color="gray.600">
            Upload your study material to generate exam questions
          </Text>

          <FileUploader onFileUpload={handleFileUpload} />

          {(questions.shortQuestions.length > 0 ||
            questions.longQuestions.length > 0) && (
            <QuestionList
              shortQuestions={questions.shortQuestions}
              longQuestions={questions.longQuestions}
            />
          )}
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
