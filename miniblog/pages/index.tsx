import { 
  Container,
  Button,
} from "@chakra-ui/react";
import toast from 'react-hot-toast';

export default function Home({ }) {
  return (
    <Container p={5}>
      <Button onClick={() => toast.success('hello toast!')}>
        Toast Meh
      </Button>
    </Container>
  );
}
