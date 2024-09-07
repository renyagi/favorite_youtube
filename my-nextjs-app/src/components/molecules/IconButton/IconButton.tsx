import React from "react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import { Icon, Icon_Props } from "../../atoms/Icon/Icon";
import theme from "../../../theme";

interface IconButton_Props {
  icon_props?: Icon_Props;
  onClick?: () => void;
}

const IconButton = ({ icon_props, onClick }: IconButton_Props) => {
  return (
    <ChakraIconButton
      aria-label="Icon button"
      backgroundColor={theme.colors.white}
      border={`1px solid ${theme.colors.gray}`}
      borderRadius="50%"
      icon={<Icon {...icon_props} />}
      onClick={onClick}
    />
  );
};

export type { IconButton_Props };
export { IconButton };
