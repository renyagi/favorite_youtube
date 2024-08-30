import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IconButton } from "../../molecules/IconButton/IconButton";
import theme from "../../../theme";

interface Sidebar_Props {
  isSelected?: "Home" | "Search" | "Create Playlist" | "Favorite List";
  onClick?: (value: string) => void;
}

const Sidebar = ({ isSelected = "Home", onClick }: Sidebar_Props) => (
  <Box
    display="flex"
    flexDirection="column"
    height="100wh"
    justifyContent="center"
    width="300px"
  >
    <Text
      color={theme.colors.black}
      fontSize={theme.fontSizes.xl2}
      fontWeight={theme.fontWeights.extraBold}
      padding="40px auto 22px"
    >
      Category
    </Text>
    <Box>
      {["Home", "Search", "Create Playlist", "Favorite List"].map((item) => (
        <IconButton
          key={item}
          isSelected={isSelected === item}
          onClick={() => onClick && onClick(item)}
          text={item}
          width="100%"
        />
      ))}
    </Box>
  </Box>
);

export type { Sidebar_Props };
export { Sidebar };
