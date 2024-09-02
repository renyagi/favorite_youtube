import React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../../../components/atoms/Button/Button";
import { Form } from "../../../components/molecules/Form/Form";
import { Link } from "../../../components/atoms/Link/Link";
import { Title } from "../../../components/atoms/Title/Title";

interface NewPasswordForm_Props {
  href?: string;
  password1?: string;
  password2?: string;
  onClick?: (email?: string, password?: string) => void;
}

const NewPasswordForm = ({
  href,
  password1,
  password2,
  onClick,
}: NewPasswordForm_Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      justifyContent="center"
      width="424px"
    >
      <Title isSub={false} title="Set new password" />
      <Form
        input_Props={{
          placeholder: "Type new password",
          value: password1,
          width: "100%",
        }}
        label="New Password"
        width="100%"
      />
      <Form
        input_Props={{
          placeholder: "Confirm your password",
          value: password2,
          width: "100%",
        }}
        label="Password（Confirm）"
        width="100%"
      />
      <Box display="flex" justifyContent="center" marginTop="20px" width="100%">
        <Button label="Change Password" width="100%" onClick={onClick} />
      </Box>
      <Box display="flex" justifyContent="center" marginTop="20px" width="100%">
        <Link href={href} label="Don’t have an account? Sign In" />
      </Box>
    </Box>
  );
};

export type { NewPasswordForm_Props };
export { NewPasswordForm };
