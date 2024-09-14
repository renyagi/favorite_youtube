import React from "react";
import { Image } from "@chakra-ui/react";

interface Icon_Props {
  size?: string;
  src?: string;
  alt?: string;
}

const Icon = ({ size = "34px", src = "https://files.oaiusercontent.com/file-Se8NLv3wUNT2g47mup9w3AZY?se=2024-09-14T06%3A45%3A41Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D66318a9f-8338-4726-bf24-9da49d493056.webp&sig=TCT5gPC/hNcJfMGvxEjU/Gbk8sTVd5mrYQfF8t7pGfs%3D", alt = "Image" }: Icon_Props) => {
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
