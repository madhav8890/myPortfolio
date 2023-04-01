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
      <Stack minH={'60vh'} ml='30px'  direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} >
          <Stack spacing={6} w={'full'} >
            <Heading>
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
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Kola Tioluwani' src='https://i.imgur.com/4zFtfsp.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Dan Abrahmov' src='https://i.imgur.com/C34mISp.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Kent Dodds' src='https://i.imgur.com/86nrvNf.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Ryan Florence' src='https://i.imgur.com/yOe7vJk.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Ryan Florence' src='https://i.imgur.com/ZdSIuO0.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Prosper Otemuyiwa' src='https://i.imgur.com/y7XduLD.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Christian Nwamba' src='https://i.imgur.com/keUpLhR.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Segun Adebayo' src='https://i.imgur.com/5pBqbGw.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Segun Adebayo' src='https://i.imgur.com/ZdSIuO0.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Dan Abrahmov' src='https://i.imgur.com/AKH68F8.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Kola Tioluwani' src='https://i.imgur.com/ivKysz2.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Kent Dodds' src='https://i.imgur.com/7IQZkNS.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Ryan Florence' src='https://i.imgur.com/MvdwugL.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Prosper Otemuyiwa' src='https://i.imgur.com/yxTFfhe.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Christian Nwamba' src='https://i.imgur.com/pKL89Ig.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Segun Adebayo' src='https://i.imgur.com/wSRsB7d.png' />
  </WrapItem>
   <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Prosper Otemuyiwa' src='https://i.imgur.com/DIdDkeE.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Christian Nwamba' src='https://i.imgur.com/5y7ibcd.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Segun Adebayo' src='https://i.imgur.com/immwOsm.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Christian Nwamba' src='https://i.imgur.com/1kTh6jI.png' />
  </WrapItem>
  <WrapItem>
    <Avatar size='lg' padding='5px' boxShadow='xl' margin='5px'  name='Segun Adebayo' src='https://i.imgur.com/mCgi76L.png' />
  </WrapItem>
</Wrap>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            borderRadius='40px'
            border='2px' borderColor='gray.200'
            src={
              'https://i.imgur.com/VIO6fq8.png'
            }
          />
        </Flex>
      </Stack>
    );
  }