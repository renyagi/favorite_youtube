import React from "react";
import { Box, FormControl, FormLabel } from "@chakra-ui/react";
import { Input_frame, Input_Props } from "../../atoms/Input/Input";
import { Link_frame, Link_Props } from "../../atoms/Link/Link";
import theme from "../../../theme";

interface Form_Props {
  input_Props?: Input_Props;
  isSub?: boolean;
  label?: string;
  link_props?: Link_Props;
  width?: string;
}

const Form_frame = ({
  input_Props,
  isSub = false,
  label = "label",
  link_props,
  width = "400px",
}: Form_Props) => {
  return (
    <FormControl
      display="flex"
      flexDirection="column"
      gap="8px"
      width={width}
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
      {isSub && (
        <Box
          alignItems="center"
          display="flex"
          justifyContent="flex-end"
        >
          <Link_frame
            href={link_props?.href}
            label={link_props?.label}
            isSub={true}
          />
        </Box>
      )}
    </FormControl>
  );
};

export type { Form_Props };
export { Form_frame };