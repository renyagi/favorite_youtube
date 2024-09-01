import React from "react";
import { Button, Text } from "@chakra-ui/react";
import theme from "../../../theme";

interface AccountButton_Props {
  text?: string;
  width?: string;
  onClick?: () => void;
}

const AccountButton = ({
  text = "text",
  width = "200px",
  onClick,
}: AccountButton_Props) => {
  return (
    <Button
      backgroundColor={theme.colors.gray_light}
      border="none"
      height="62px"
      display="flex"
      justifyContent="center"
      textAlign="center"
      transition="0.2s"
      width={width}
      _hover={{
        backgroundColor: `${theme.colors.blue_light}4D`,
      }}
      onClick={onClick}
    >
      <Text
        color={theme.colors.black}
        fontSize={theme.fontSizes.ld}
        fontWeight={theme.fontWeights.normal}
        lineHeight="1.2"
        width="100%"
      >
        {text}
      </Text>
    </Button>
  );
};

export type { AccountButton_Props };
export { AccountButton };
