import { 
  Box,
  HStack,
  Button,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Link from 'next/link';

const Navbar = () => {
  const user = null;
  const username = null;

  return (
    <Box 
      bg="whiteAlpha.300" 
      px={4} 
      boxShadow="lg"
    >
      <HStack 
        p={5} 
        pr={15}
        pl={15}
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/" passHref>
          <Button colorScheme="purple">FEED</Button>
        </Link>
        {/* user is signed-in and has a username*/}
        {username && (
          <>
            <Link href="/admin" passHref>
              <Button colorScheme="teal">Write Posts</Button>
            </Link>
            <Link href={`/${username}`}>
              <Image src={user?.photoURL} alt="Profile Pic"/>
            </Link>
          </>
        )}

        {/* user is not signed OR has not created a username*/}
        {!username && (
          <Link href="/enter" passHref>
            <Button colorScheme="orange">Log in</Button>
          </Link>
        )}
      </HStack>
    </Box>
  );
};

export default Navbar;
