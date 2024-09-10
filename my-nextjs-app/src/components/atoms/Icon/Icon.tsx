import React from "react";
import { Image } from "@chakra-ui/react";

interface Icon_Props {
  size?: string;
  src?: string;
  alt?: string;
}

const Icon = ({ size = "34px", src = "#", alt = "Image" }: Icon_Props) => {
  return (
    <Image
      alt={alt}
      borderRadius="50%"
      height={size}
      objectFit="cover"
      src={src}
      width={size}
    />
  );
};

export type { Icon_Props };
export { Icon };
