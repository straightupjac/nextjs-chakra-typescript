import { Box, Button, Container, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Components: NextPage = () => {
  return (
    <Container height='100vh'>
      <main>
        <VStack pt={4} py={8} gap={4} width='100%'>
          <Text as='h1' textAlign='center'>
            Components
          </Text>
          <Box width='100%'>
            <VStack alignItems='start'>
              <Text as='h2'>Headers</Text>
              <Text as='h1'>Heading 1</Text>
              <Text as='h2'>Heading 2</Text>
              <Text as='h3'>Heading 3</Text>
              <Text as='h4'>Heading 4</Text>
              <Text as='a'>Link styling</Text>
              <Text as='p'>Body</Text>
            </VStack>
          </Box>
          <Box width='100%'>
            <VStack alignItems='start'>
              <Text as='h2'>Buttons</Text>
              <Button>Primary</Button>
              <Button variant='outline'>Primary</Button>
            </VStack>
          </Box>
        </VStack>
      </main>
    </Container>
  );
};

export default Components;
