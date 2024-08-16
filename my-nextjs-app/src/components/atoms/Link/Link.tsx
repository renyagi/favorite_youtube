import React from "react";
import { Link } from "@chakra-ui/react";
import theme from "../../../theme";

interface Link_Props {
  href?: string;
  label?: string;
}

const Link_frame = ({
  href = "#",
  label = "label",
}: Link_Props) => {
  return (
    <Link
      color={theme.colors.black}
      fontSize={theme.fontSizes.sm}
      fontWeight={theme.fontWeights.bold}
      href={href}
      lineHeight="1.6"
    >
      {label}
    </Link>
  );
}

export { Link_frame, Link_Props };
