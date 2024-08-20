import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import theme from "../../../theme";

interface Card_Props {
  title?: string;
  text?: string;
}

const Card_frame: React.FC<Card_Props> = ({
  title = "Title",
  text = "This is a description."
}) => {
  return (
    <Box
      alignItems="center"
      backgroundColor={theme.colors.gray_light}
      borderRadius="8px"
      borderWidth="1px"
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      gap="16px"
      width="400px"
    >
      <Heading
        color={theme.colors.black}
        fontSize={theme.fontSizes.lg}
        fontWeight={theme.fontWeights.bold}
        margin="20px"
        textDecorationLine="underline"
      >
        {title}
      </Heading>
      <Text
        color={theme.colors.gray_dark}
        fontSize={theme.fontSizes.sm}
        fontWeight={theme.fontWeights.normal}
      >
        {text}
      </Text>
    </Box>
  );
};

export type { Card_Props };
export { Card_frame };