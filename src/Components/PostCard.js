import React from "react";
import { Link } from "react-router-dom";

import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

const PostCard = () => {
  return (
    <Flex justify="center" align="center">
      <Stack w="320px" boxShadow="md" borderRadius="xl">
        <Image src="/post.png" alt="bg-image" />
        <Stack p={2}>
          <HStack>
            <Avatar size="sm" />
            <Text fontWeight="600">John Doe</Text>
            <Text fontSize="xs">1 Min ago</Text>
          </HStack>
          <VStack align="flex-start">
            <Heading fontSize="lg">Web Development</Heading>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              impedit optio recusandae? Atque repellendus soluta voluptatibus
              tempora unde voluptates vel.
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              quis alias dolores! Odio, repellendus. Error aliquam a
              perspiciatis in minus?
            </Text>
            <Button size="sm" alignSelf="flex-end" as={Link} to="/post">
              View Post
            </Button>
          </VStack>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default PostCard;
