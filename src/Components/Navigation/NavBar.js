import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigation = useNavigate();
  return (
    <>
      <Flex
        h="75px"
        bg="brand.800"
        justifyContent="space-between"
        align="center"
        px={4}
      >
        <ButtonGroup>
          <Button onClick={() => navigation("/")}>Home</Button>
          <Button onClick={() => navigation("cart")}>Cart</Button>
          <Button onClick={() => navigation("post")}>Posts</Button>
        </ButtonGroup>
        <Menu>
          <MenuButton>
            <Avatar name="John Doe" />
          </MenuButton>

          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Setting</MenuItem>
          </MenuList>
        </Menu>
        {/* <Popover>
          <PopoverTrigger>
           
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              <List>
                <ListItem>Profile</ListItem>
                <ListItem>Setting</ListItem>
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover> */}
      </Flex>
    </>
  );
};

export default NavBar;
