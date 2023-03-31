import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    WrapItem,
    Avatar,
    Wrap
  } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack minH={'60vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} >
          <Stack spacing={6} w={'full'} >
            <Heading>
              <Text
                as={'span'}
                position={'relative'}
               >
                Freelance
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Design Projects
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Wrap>
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  </WrapItem>
</Wrap>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }