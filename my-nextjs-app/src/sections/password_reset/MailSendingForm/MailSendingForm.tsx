import React from "react";
import { Box } from "@chakra-ui/react";
import { Button_frame } from "../../../components/atoms/Button/Button";
import { Form_frame } from "../../../components/molecules/Form/Form";
import { Link_frame } from "../../../components/atoms/Link/Link";
import { Title_frame } from "../../../components/atoms/Title/Title";

interface MailSendingForm_Props {
  email?: string;
  href?: string;
  onClick?: (email?: string, password?: string) => void;
}

const MailSendingForm = ({
  email,
  href,
  onClick,
}: MailSendingForm_Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      justifyContent="center"
      width="424px"
    >
      <Title_frame
        isSub={false}
        title="Reset your password"
      />
      <Form_frame
        input_Props={{
          placeholder: "Type your e-mail",
          value: email,
          width: "100%",
        }}
        label="E-mail"
        width="100%"
      />
      <Box
        display="flex"
        justifyContent="center"
        marginTop="20px"
        width="100%"
      >
        <Button_frame
          label="Send Email"
          width="100%"
          onClick={onClick}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        marginTop="20px"
        width="100%"
      >
        <Link_frame
          href={href}
          label="Don’t have an account? Sign Up"
        />
      </Box>
    </Box>
  );
};

export type { MailSendingForm_Props };
export { MailSendingForm };