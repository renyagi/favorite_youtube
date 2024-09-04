import React from "react";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { Input_s, Input_Props } from "../../atoms/Input/Input";
import { Link_s, Link_Props } from "../../atoms/Link/Link";
import theme from "../../../theme";

interface Form_Props {
  input_props?: Input_Props;
  isSub?: boolean;
  label?: string;
  link_props?: Link_Props;
  width?: string;
}

const Form = ({
  input_props,
  isSub = false,
  label = "label",
  link_props,
  width = "400px",
}: Form_Props) => {
  return (
    <FormControl display="flex" flexDirection="column" gap="8px" width={width}>
      <FormLabel
        color={theme.colors.black}
        fontSize={theme.fontSizes.sm}
        fontWeight={theme.fontWeights.medium}
      >
        {label}
      </FormLabel>
      <Input_s {...input_props} />
      {isSub && (
        <Box alignItems="center" display="flex" justifyContent="flex-end">
          <Link_s {...link_props} isSub={true} />
        </Box>
      )}
    </FormControl>
  );
};

export type { Form_Props };
export { Form };
