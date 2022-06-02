import { Spinner } from "@chakra-ui/react";

export default function Loader({ show }) {
  return show ? 
    <Spinner 
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      speed="0.65s"
      thickness="4px"
    /> 
       : 
    null;
}
