import React from "react";
import { Box, Text } from "@chakra-ui/react";
import theme from "../../../theme";

interface Title_Props {
  subTitle?: string;
  title: string;
}

const Title_frame = ({
  subTitle = "subTitle",
  title = "title",
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="12px"
    >
      <Text
        color={theme.colors.black}
        fontSize={theme.fontSizes.xl2}
        fontWeight={theme.fontWeights.bold}
        lineHeight="1.3"
      >
        {title}
      </Text>
      {subTitle != "subTitle" && (
        <Text
          color={theme.colors.black}
          fontSize={theme.fontSizes.md}
          fontWeight={theme.fontWeights.normal}
          lineHeight="1.6"
        >
          {subTitle}
        </Text>
      )}
    </Box>
  );
};

export type { Title_Props };
export { Title_frame };