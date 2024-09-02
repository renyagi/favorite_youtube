import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import theme from "../../../theme";

interface HeroSection_Props {
  img?: string;
  isSub?: boolean;
  subTitle?: string;
  title?: string;
  width?: string;
}

const HeroSection = ({
  img = "https://s4.aconvert.com/convert/p3r68-cdx67/aa4wu-e2ad0.jpg",
  isSub = false,
  subTitle = "subTitle",
  title = "title",
  width = "720px",
}: HeroSection_Props) => {
  return (
    <Box
      alignItems="center"
      backgroundImage={`url(${img})`}
      backgroundPosition="center"
      backgroundSize="cover"
      display="flex"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      position="relative"
      textAlign="center"
      width={width}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor={`${theme.colors.black}80`}
        zIndex="1"
      />
      <Box position="relative" zIndex="2">
        <Heading
          color={theme.colors.white}
          fontSize={theme.fontSizes.xl6}
          fontWeight={theme.fontWeights.extraBold}
          lineHeight="1.2"
        >
          {title}
        </Heading>
        {isSub && (
          <Text
            color={theme.colors.white}
            fontSize={theme.fontSizes.lg}
            fontWeight={theme.fontWeights.normal}
            lineHeight="1.6"
          >
            {subTitle}
          </Text>
        )}
      </Box>
    </Box>
  );
};

export type { HeroSection_Props };
export { HeroSection };
