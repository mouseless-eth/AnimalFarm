import { 
  Box,
  HStack,
  Button,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Link from 'next/link';
import { useContext } from "react";
import { UserContext } from "../lib/context";

const Navbar = () => {

  const { user, username } = useContext(UserContext);

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
          <HStack>
            <Link href="/admin" passHref>
              <Button colorScheme="teal">Write Posts</Button>
            </Link>
           <Link href={`/${username}`}>
              <Image boxSize={10} src={user?.photoURL} alt="Profile Pic"/>
            </Link>
          </HStack>
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
