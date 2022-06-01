import { 
  Text,
  Container,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home({ }) {
  return (
    <Container>
      <Link prefetch={true} href={"/child"}>
        <Text>
          click me
        </Text>
      </Link>
    </Container>
  );
}
