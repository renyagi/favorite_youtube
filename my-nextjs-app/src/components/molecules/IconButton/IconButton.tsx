import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import theme from "../../../theme";

interface IconButtonProps {
  icon?: React.ReactElement;
  onClick?: () => void;
  text?: string;
  width?: string;
}

const IconButton = ({
  icon = <FaStar size="32px" />,
  text = "text",
  width = "230px",
  onClick,
}: IconButtonProps) => {
  return (
    <Button
      alignItems="center"
      backgroundColor={theme.colors.black}
      border="none"
      color={theme.colors.white}
      display="flex"
      height="48px"
      gap="20px"
      justifyContent="flex-start"
      padding="16px"
      width={width}
      onClick={onClick}
    >
      {icon && React.cloneElement(icon, { color: theme.colors.gray, size: "24px" })}
      {text && (
        <Text
          color={theme.colors.gray}
          fontSize={theme.fontSizes.lg}
          fontWeight={theme.fontWeights.bold}
        >
          {text}
        </Text>
      )}
    </Button>
  );
};

export type { IconButtonProps };
export { IconButton };
