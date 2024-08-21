import React from "react";
import { Box } from "@chakra-ui/react";
import { MailSendingForm, MailSendingForm_Props } from "../MailSendingForm/MailSendingForm";
import { Card_frame, Card_Props } from "../../../components/atoms/Card/Card";

interface MailSendingContainer_Props {
  email?: string;
  href?: string;
  isSent?: boolean;
  onClick?: (email?: string, password?: string) => void;
}

const MailSendingContainer = ({
  email,
  href,
  isSent = false,
  onClick,
}: MailSendingContainer_Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      justifyContent="center"
      width="424px"
    >
      {isSent ? (
        <MailSendingForm
          email={email}
          href={href}
          onClick={onClick}
        />
      ) : (
        <Card_frame
          title=""
          text=""
        />
      )}
    </Box>
  );
};

export type { MailSendingContainer_Props };
export { MailSendingContainer };