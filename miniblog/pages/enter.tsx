import { 
  Text,
  Container,
  Button,
  Image,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { auth, googleAuthProvider, firestore } from '../lib/firebase';
import { useState, useContext, useEffect, useCallback } from "react";
import { UserContext } from "../lib/context";
import debounce from 'lodash.debounce';

export default function Enter({ }) {

  const { user, username } = useContext(UserContext);

  // 1. User signed out <SignInButton />
  // 2. User signed in, but missing username <UsernameForm />
  // 3. User signed in, has username <SignOutButton />
  return (
    <Container p={5}>
      {user ? 
        !username ? <UsernameForm /> : <SignOutButton />
        :
        <SignInButton />
      }
    </Container>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <Button onClick={signInWithGoogle}>
      <Image 
        src="./static/images/google.png" 
        alt="google logo" 
        boxSize={8}
      /> Sign in with Google
    </Button>
  );
}

// Sign out button
function SignOutButton() {
  return (
    <Button onClick={() => auth.signOut()}>Sign Out</Button>
  );
}

// Allow user to set their username
function UsernameForm() {
  const [formValue, setFormValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);

  const checkUsername = useCallback(
    debounce(async (username: String) => {
      if (username.length >= 3) {
        const ref = firestore.doc(`usernames/${username}`);
        const { exists } = await ref.get();
        console.log("Firestore read executed");
        setIsValid(!exists);
        setLoading(false);
      }
    }, 500), 
      []
  );

  const onChange = (e) => {
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/; 

    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(true);
    }
  }

  const onSubmit = async (e) => {
    console.log("Form submitted");
    e.preventDefault();

    // Create ref for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    // Commit bot docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, { 
      username: formValue, 
      photoURL: user.photoURL,
      displayName: user.displayName,
    });
    batch.set(usernameDoc, { uid: user.uid });

    await batch.commit();
  }

  return (
    !username && (
      <Container>
        <form onSubmit={onSubmit}>
          <FormControl >
            <FormLabel>Choose Username</FormLabel>
            <Input 
              name="username" 
              placeholder="username" 
              value={formValue} 
              onChange={onChange}
            />
            <Button type="submit" disabled={!isValid}>Choose</Button>
            <UsernameMessage username={formValue} isValid={isValid} loading={loading}/>
          </FormControl>
        </form>
      </Container>
    )
  );
}

function UsernameMessage({
  username,
  isValid,
  loading,
}) {
  if (loading) {
    return <FormHelperText>Checking...</FormHelperText>
  } else if (isValid) {
    return <FormHelperText>{username} is available!</FormHelperText>
  } else if (username && !isValid) { 
    return <FormErrorMessage>{username} is taken!</FormErrorMessage>
  } else {
    return <></>
  }
}
