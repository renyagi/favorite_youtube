import React from "react";
import { Box } from "@chakra-ui/react";
import theme from "../../../theme";
import { AccountButton } from "../../atoms/AccountButton/AccountButton";
import {
  AccountInfo,
  AccountInfo_Props,
} from "../../molecules/AccountInfo/AccountInfo";

interface AccountDropdown_Props {
  accountinfo_props?: AccountInfo_Props;
  width?: string;
  onClick?: (value: string) => void;
}

const AccountDropdown = ({ accountinfo_props, width = "270px", onClick }: AccountDropdown_Props) => {
  return (
    <Box
      backgroundColor={theme.colors.white}
      border={`1px solid ${theme.colors.gray}`}
      borderRadius="20px"
      padding="20px"
      width={width}
    >
      <AccountInfo {...accountinfo_props} width="calc(100% - 36px)" />
      <AccountButton
        text="Settings"
        width="100%"
        onClick={() => onClick && onClick("Settings")}
      />
      <AccountButton
        text="Logout"
        width="100%"
        onClick={() => onClick && onClick("Logout")}
      />
    </Box>
  );
};

export type { AccountDropdown_Props };
export { AccountDropdown };
