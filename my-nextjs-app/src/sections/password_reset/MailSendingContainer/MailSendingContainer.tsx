import React from "react";
import { Box } from "@chakra-ui/react";
import {
  MailSendingForm,
  MailSendingForm_Props,
} from "../MailSendingForm/MailSendingForm";
import { Card, Card_Props } from "../../../components/atoms/Card/Card";

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
        <Card
          title="Submission Complete"
          text="The password change has not been completed. We have sent you an email with instructions on how to reset your password. Please check the email and complete the reset process within the next three hours."
        />
      ) : (
        <MailSendingForm email={email} href={href} onClick={onClick} />
      )}
    </Box>
  );
};

export type { MailSendingContainer_Props };
export { MailSendingContainer };
