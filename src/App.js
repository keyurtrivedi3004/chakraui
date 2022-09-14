import { Container, Flex } from "@chakra-ui/react";
import Cart from "./Components/Cart";
import YourDetail from "./Components/YourDetail";

function App() {
  return (
    <Container maxW="container.xl" p="10">
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{
          base: "column-reverse",
          md: "row",
        }}
      >
        <YourDetail />
        <Cart />
      </Flex>
    </Container>
  );
}

export default App;
