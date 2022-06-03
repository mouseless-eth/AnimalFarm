import { 
  Text,
  Container,
} from "@chakra-ui/react";
import { auth, googleAuthProvider } from '../lib/firebase';

export default function Enter({ }) {
  const user = null;
  const username = null;

  // 1. User signed out <SignInButton />
  // 2. User signed in, but missing username <UsernameForm />
  // 3. User signed in, has username <SignOutButton />
  return (
    <Container>
      <Text color="blue.500" fontSize='xl'>Sign Up</Text>
    </Container>
  );
}

// Sign in with Google button
function SignInButton() {
}

// Sign out button
function SignOutButton() {
}

// Allow user to set their username
function UsernameForm() {

}
