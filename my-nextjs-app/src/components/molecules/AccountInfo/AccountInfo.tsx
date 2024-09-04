import React from "react";
import { Box, Text } from "@chakra-ui/react";
import theme from "../../../theme";
import { Icon, Icon_Props } from "../../atoms/Icon/Icon";

interface AccountInfo_Props {
  email?: string;
  icon_props?: Icon_Props;
  name?: string;
  width?: string;
}

const AccountInfo = ({
  email = "email",
  icon_props,
  name = "name",
  width = "250px",
}) => {
  return (
    <Box
      alignItems="center"
      backgroundColor={theme.colors.white}
      display="flex"
      height="90px"
      gap="14px"
      justifyContent="cetner"
      padding="18px"
      width={width}
    >
      <Icon {...icon_props} />
      <Box>
        <Text
          color={theme.colors.black}
          fontSize={theme.fontSizes.sm}
          fontWeight={theme.fontWeights.normal}
          margin="0 0 6px"
        >
          {name}
        </Text>
        <Text
          color={theme.colors.black}
          fontSize={theme.fontSizes.sm}
          fontWeight={theme.fontWeights.normal}
          margin="0"
        >
          {email}
        </Text>
      </Box>
    </Box>
  );
};

export type { AccountInfo_Props };
export { AccountInfo };
