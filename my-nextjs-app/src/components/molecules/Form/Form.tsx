import React from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Input_frame, Input_Props } from "../../atoms/Input/Input"
import theme from "../../../theme";

interface Form_Props {
  label?: string;
  input_Props?: Input_Props;
}

const Form_frame = ({
  label = "label",
  input_Props,
}: Form_Props) => {
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      gap="8px"
    >
      <FormLabel
        color={theme.colors.black}
        fontSize={theme.fontSizes.sm}
        fontWeight={theme.fontWeights.medium}
      >
        {label}
      </FormLabel>
      <Input_frame
        placeholder={input_Props?.placeholder}
        value={input_Props?.value}
        width={input_Props?.width}
        onChange={input_Props?.onChange}
      />
    </FormControl>
  );
};

export { Form_frame, Form_Props };