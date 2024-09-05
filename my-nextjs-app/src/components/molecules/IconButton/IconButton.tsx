import React from "react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { Icon } from "../../atoms/Icon/Icon";
import theme from "../../../theme";

interface IconButton_Props {
  onClick: () => void;
}

const IconButton = ({ onClick }) => {
  return (
    <ChakraIconButton
      aria-label="Icon button"
      backgroundColor={theme.colors.white}
      border={`1px solid ${theme.colors.gray}`}
      borderRadius="50%"
      icon={<Icon />}
      onClick={onClick}
    />
  );
};

export type { IconButton_Props };
export { IconButton };