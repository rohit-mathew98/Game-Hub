import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo2.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onsearch: (searchText: string) => void;
}

const NavBar = ({ onsearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchInput onsearch={onsearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
