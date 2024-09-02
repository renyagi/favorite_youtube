import React from "react";
import { Link } from "@chakra-ui/react";
import theme from "../../../theme";

interface Link_Props {
  href?: string;
  label?: string;
  isSub?: boolean;
}

const Link = ({
  href = "#",
  label = "label",
  isSub = false,
}: Link_Props) => {
  return (
    <Link
      color={isSub ? theme.colors.gray_dark : theme.colors.black}
      fontSize={isSub ? theme.fontSizes.xs : theme.fontSizes.sm}
      fontWeight={isSub ? theme.fontWeights.normal : theme.fontWeights.bold}
      href={href}
      lineHeight="1.6"
      textDecoration="none"
    >
      {label}
    </Link>
  );
};

export type { Link_Props };
export { Link };
