import { 
  Container,
  Image,
  Text,
} from "@chakra-ui/react";

// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <Container justifyContent="center">
      <Image src={user.photoURL} alt="User Profile Photo" />
      <Text>@{user.username}</Text>
      <Text>{user.displayName}</Text>
    </Container>
  );
}
