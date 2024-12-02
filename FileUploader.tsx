import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Text, VStack, Icon } from '@chakra-ui/react';
import { FiUpload } from 'react-icons/fi';

interface FileUploaderProps {
  onFileUpload: (files: File[]) => void;
}

export const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/*': ['.txt', '.md', '.pdf']
    }
  });

  return (
    <Box
      {...getRootProps()}
      p={8}
      border="2px dashed"
      borderColor={isDragActive ? 'blue.400' : 'gray.300'}
      borderRadius="lg"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ borderColor: 'blue.400' }}
    >
      <input {...getInputProps()} />
      <VStack spacing={2}>
        <Icon as={FiUpload} w={8} h={8} color="gray.500" />
        <Text textAlign="center">
          {isDragActive
            ? 'Drop the files here...'
            : 'Drag and drop files here, or click to select files'}
        </Text>
      </VStack>
    </Box>
  );
};
