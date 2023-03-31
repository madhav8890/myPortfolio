import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
  Text,
  Badge

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Header from '../pages/Header'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('#ced4db', 'gray.900')} px={6}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* <Image src='https://www.linkpicture.com/q/tuxpi.com.1680236196-removebg-preview.png'/> */}
          <Box display={'flex'} spacing={4}>
          <Avatar
            size={'md'}
            src={
              'https://www.linkpicture.com/q/tuxpi.com.1680236196-removebg-preview.png'
            }
          />
            <Text fontWeight='bold' ml={'10px'} flexDirection={"Column"}>
              Madhav Prajapati
            <Text align='left' fontSize='sm'>Full Stack Devloper</Text>
            </Text>
          </Box>

          <Flex alignItems={'center'}>
            <Menu>
              <HStack spacing={8} alignItems={'center'} >
                <HStack
                  as={'nav'}
                  spacing={4}
                  display={{ base: 'none', md: 'flex' }}
                >
                  {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))}
                </HStack>
              </HStack>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <Box>
        <Header />
      </Box>
    </>
  );
}