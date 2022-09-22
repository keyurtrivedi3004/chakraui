import {
  Avatar,
  Container,
  Text,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const PostPage = () => {
  return (
    <Container maxW="container.xl">
      <Stack spacing={4} mt={8}>
        <Heading fontSize="2xl" textTransform="capitalize">
          Web Development
        </Heading>
        <Image src="/big_image.png" />
        <HStack>
          <Avatar name="John Deo" size="lg" />
          <Text fontWeight="600">John Doe</Text>
          <Text fontSize="xs">1 Min ago</Text>
        </HStack>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          commodi esse ab dignissimos mollitia provident modi quas voluptatibus
          culpa assumenda, error saepe! Rerum eligendi molestiae libero
          perspiciatis nemo eos exercitationem tenetur fugiat necessitatibus
          dolore, placeat ea praesentium consequatur omnis! Eveniet molestias
          sit fuga voluptate necessitatibus doloremque. Ex placeat inventore
          aspernatur.
        </Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          commodi esse ab dignissimos mollitia provident modi quas voluptatibus
          culpa assumenda, error saepe! Rerum eligendi molestiae libero
          perspiciatis nemo eos exercitationem tenetur fugiat necessitatibus
          dolore, placeat ea praesentium consequatur omnis! Eveniet molestias
          sit fuga voluptate necessitatibus doloremque. Ex placeat inventore
          aspernatur.
        </Text>
      </Stack>
    </Container>
  );
};

export default PostPage;
