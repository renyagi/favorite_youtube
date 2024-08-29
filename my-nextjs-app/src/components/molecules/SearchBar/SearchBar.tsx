import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Input_frame } from "../../atoms/Input/Input";
import theme from "../../../theme";

interface SearchBar_Props {
  value?: string;
  width?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (value: string) => void;
}

const SearchBar = ({
  value,
  width = "400px",
  onChange,
  onClick,
}: SearchBar_Props) => {
  return (
    <Box
      borderRadius="8px 0 0 8px"
      display="flex"
      width={width}
    >
      <Input_frame
        placeholder="Search..."
        value={value}
        width="100%"
        onChange={onChange}
      />
      <Button
        backgroundColor={theme.colors.gray_light}
        border="none"
        borderRadius="0 8px 8px 0"
        height="100%"
        padding="18px"
        onClick={() => onClick?.(value || "")}
      >
        <FaSearch color={theme.colors.gray_dark} />
      </Button>
    </Box>
  );
};

export type { SearchBar_Props };
export { SearchBar };
