import React from "react";
import {
  Heading,
  VStack,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

function YourDetail() {
  return (
    <VStack w="full" h="full" p={10} spacing={10} align="flex-start">
      <VStack spacing={2} align="flex-start">
        <Heading>Your Details</Heading>
        <Text>if you already have acoount click hear to login</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={4}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Enter First Name" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Enter Last Name" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea placeholder="Enter Your Address" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Enter City" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select Country">
              <option value="India">India</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <Checkbox>Ship To The Billing Address</Checkbox>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button width="full" size="lg">
            PLACE ORDER
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
}

export default YourDetail;
