import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Icon, Icon_Props } from "../../atoms/Icon/Icon";
import theme from "../../../theme";

interface ArtistIcon_Props {
  icon_props?: Icon_Props;
  name?: string;
}

const ArtistIcon = ({ icon_props, name = "name" }: ArtistIcon_Props) => {
  return (
    <Box
      alignItems="center"
      display=" flex"
      flexDirection="column"
      gap="13px"
      margin="20px"
    >
      <Icon {...icon_props} size="184px" />
      <Text
        color={theme.colors.black}
        fontSize={theme.fontSizes.lg}
        fontWeight={theme.fontWeights.normal}
        margin="0"
      >
        {name}
      </Text>
    </Box>
  );
};

export type { ArtistIcon_Props };
export { ArtistIcon };
