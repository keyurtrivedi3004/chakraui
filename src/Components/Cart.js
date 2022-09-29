import React from "react";
import {
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  AspectRatio,
  Stack,
  Divider,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function Cart() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const textColor = useColorModeValue("gray.600", "whiteAlpha.600");

  return (
    <VStack
      bg={bgColor}
      w="full"
      h="full"
      p={10}
      spacing={10}
      align="flex-start"
    >
      <VStack spacing={3} align="flex-start">
        <Heading size="2xl">Your Cart</Heading>
        <Text>
          if the price is too hard on your eyes,{"  "}
          <Button
            onClick={toggleColorMode}
            variant="outline"
            colorScheme="black"
          >
            try changing the theme
          </Button>
        </Text>
      </VStack>
      <HStack spacing={6} align="center" w="full">
        <AspectRatio ratio={1} w={24}>
          <img
            src="https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg"
            alt="man watch black"
            srcset=""
          />
        </AspectRatio>
        <Stack
          spacing={0}
          w="full"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Heading size="md">Man Watch Black</Heading>
            <Text color={textColor}>PYWA0000048F</Text>
          </VStack>
          <Heading size="sm" textAlign="end">
            $199.00
            ₹199.00
          </Heading>
        </Stack>
      </HStack>
      <VStack spacing={4} alignItems="stretch" w="full">
        <HStack justifyContent="space-between">
          <Text color={textColor}>Subtotal</Text>
          <Heading size="sm">₹119.00</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>Shipping</Text>
          <Heading size="sm">₹19.99</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={textColor}>Taxes (estimate)</Text>
          <Heading size="sm">₹23.00</Heading>
        </HStack>
      </VStack>
      <Divider />
      <HStack justifyContent="space-between" w="full">
        <Text color={textColor}>Total</Text>
        <Heading size="lg">₹162.72</Heading>
      </HStack>
    </VStack>
  );
}

export default Cart;
