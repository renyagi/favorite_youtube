import React from "react";
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import theme from "../../../theme";

interface Button_Props {
  label?: string;
  width?: string;
  onClick?: () => void;
}

const Button_frame = ({
  label = "label",
  width = "200px",
  onClick,
}: Button_Props) => {
  return (
    <Button
      backgroundColor={theme.colors.black}
      borderColor={theme.colors.black}
      borderRadius="12px"
      transition="0.2s"
      width={width}
      _hover={{
        bg: theme.colors.gray,
        borderColor: theme.colors.gray,
      }}
      onClick={onClick}
    >
      <Text>
        {label}
      </Text>
    </Button>
  );
};

const Text = styled.div`
  background-color: inherit;
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.md};
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.2;
  margin: 16px 24px;
  text-align: center;
  width: 100%;
`;

export type { Button_Props };
export { Button_frame };