import React from "react";
import { Image } from "@chakra-ui/react";

interface Icon_Props {
  src?: string;
  alt?: string;
}

const Icon = ({ src = "#", alt = "Image" }: Icon_Props) => {
  return (
    <Image
      alt={alt}
      borderRadius="50%"
      height="34px"
      objectFit="cover"
      src={src}
      width="34px"
    />
  );
};

export type { Icon_Props };
export { Icon };
