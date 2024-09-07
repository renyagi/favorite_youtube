import React from "react";
import { Box } from "@chakra-ui/react";
import { AccountMenu, AccountMenu_Props } from "../AccountMenu/AccountMenu";
import {
  SearchBar,
  SearchBar_Props,
} from "../../molecules/SearchBar/SearchBar";

interface Header_Props {
  accountmenu_props?: AccountMenu_Props;
  searchbar_props?: SearchBar_Props;
}

const Header = ({ accountmenu_props, searchbar_props }: Header_Props) => (
  <Box
    alignItems="center"
    display="flex"
    height="80px"
    justifyContent="space-between"
    padding="40px"
    width="calc(100vw - 300px)"
  >
    <SearchBar {...searchbar_props} width="470px" />
    <AccountMenu {...accountmenu_props} />
  </Box>
);

export type { Header_Props };
export { Header };
