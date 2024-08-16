import React from "react";
import { Box, Text } from "@chakra-ui/react";
import theme from "../../../theme";

interface Title_Props {
  isSub?: boolean;
  subTitle?: string;
  title: string;
}

const Title_frame = ({
  isSub = false,
  subTitle = "subTitle",
  title = "title",
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Text
        color={theme.colors.black}
        fontSize={theme.fontSizes.xl2}
        fontWeight={theme.fontWeights.bold}
        lineHeight="1.6"
        margin="0"
      >
        {title}
      </Text>
      {isSub && (
        <Text
          color={theme.colors.black}
          fontSize={theme.fontSizes.md}
          fontWeight={theme.fontWeights.normal}
          lineHeight="1.3"
          margin="0"
        >
          {subTitle}
        </Text>
      )}
    </Box>
  );
};

export type { Title_Props };
export { Title_frame };