import React from "react";
import { Input } from "@chakra-ui/react";
import theme from "../../theme.js";

interface Props {
  placeholder: string;
  value: string;
  width: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input_frame = ({
  placeholder = "placeholder",
  value,
  width = "400px",
  onChange,
}: Props) => {
  return (
    <Input
      backgroundColor={theme.colors.gray_light}
      border="none"
      borderRadius="6px"
      color={theme.colors.black}
      fontSize={theme.fontSizes.md}
      fontWeight={theme.fontWeights.bold}
      padding="14px 50px 16px 16px"
      placeholder={placeholder}
      value={value}
      width={width}
      onChange={onChange}
    />
  );
};
