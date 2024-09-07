import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  IconButton,
  IconButton_Props,
} from "../../molecules/IconButton/IconButton";
import {
  AccountDropdown,
  AccountDropdown_Props,
} from "../../organisms/AccountDropdown/AccountDropdown";

interface AccountMenu_Props {
  accountdropdown_props?: AccountDropdown_Props;
  iconbutton_props?: IconButton_Props;
}

const AccountMenu = ({
  accountdropdown_props,
  iconbutton_props,
}: AccountMenu_Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <Box display="flex" flexDirection="column" gap="10px" width="270px">
      <Box
        height="34px"
        margin="0 0 0 auto"
        position="fixed"
      >
        <IconButton
          {...iconbutton_props}
          onClick={() => {
            setOpen(!isOpen);
          }}
        />
      </Box>
      {isOpen && <AccountDropdown {...accountdropdown_props} width="100%" />}
    </Box>
  );
};

export type { AccountMenu_Props };
export { AccountMenu };
