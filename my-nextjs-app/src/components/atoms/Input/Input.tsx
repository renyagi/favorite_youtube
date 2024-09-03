import React from "react";
import { Input } from "@chakra-ui/react";
import theme from "../../../theme";

interface Input_Props {
  placeholder?: string;
  value?: string;
  width?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input_s = ({
  placeholder = "placeholder",
  value,
  width = "400px",
  onChange,
}: Input_Props) => {
  return (
    <Input
      backgroundColor={theme.colors.gray_light}
      border="none"
      borderRadius="6px"
      boxSizing="border-box"
      color={theme.colors.black}
      fontSize={theme.fontSizes.md}
      fontWeight={theme.fontWeights.bold}
      padding="14px"
      placeholder={placeholder}
      value={value}
      width={width}
      onChange={onChange}
    />
  );
};

export type { Input_Props };
export { Input_s };
