import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import theme from "../../../theme";

interface IconButton_Props {
  icon?: React.ReactElement;
  isSelected?: boolean;
  text?: string;
  width?: string;
  onClick?: () => void;
}

const IconButton = ({
  icon = <FaStar size="32px" />,
  isSelected = true,
  text = "text",
  width = "230px",
  onClick,
}: IconButton_Props) => {
  return (
    <Button
      alignItems="center"
      backgroundColor={theme.colors.white}
      borderBottom={`1px solid ${isSelected ? theme.colors.blue : theme.colors.black}`}
      color={isSelected ? theme.colors.blue : theme.colors.black}
      display="flex"
      height="48px"
      gap="20px"
      justifyContent="flex-start"
      padding="16px"
      width={width}
      onClick={onClick}
    >
      {icon &&
        React.cloneElement(icon, {
          color: isSelected ? theme.colors.blue : theme.colors.black,
          size: "24px",
        })}
      {text && (
        <Text fontSize={theme.fontSizes.lg} fontWeight={theme.fontWeights.bold}>
          {text}
        </Text>
      )}
    </Button>
  );
};

export type { IconButton_Props };
export { IconButton };
