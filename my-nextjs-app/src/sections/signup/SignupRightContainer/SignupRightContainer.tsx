import React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../../../components/atoms/Button/Button";
import { Form } from "../../../components/molecules/Form/Form";
import { Link } from "../../../components/atoms/Link/Link";
import { Title } from "../../../components/atoms/Title/Title";

interface SignupRightContainer_Props {
  email?: string;
  href?: string;
  name?: string;
  password?: string;
  onClick?: (email?: string, name?: string, password?: string) => void;
}

const SignupRightContainer = ({
  email,
  href = "#",
  name,
  password,
  onClick,
}: SignupRightContainer_Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      justifyContent="center"
      width="424px"
    >
      <Title title="Create your account" />
      <Form
        input_Props={{
          placeholder: "Enter your name",
          value: name,
          width: "100%",
        }}
        label="Full name"
        width="100%"
      />
      <Form
        input_Props={{
          placeholder: "Type your e-mail",
          value: email,
          width: "100%",
        }}
        label="E-mail"
        width="100%"
      />
      <Form
        input_Props={{
          placeholder: "Type your password",
          value: password,
          width: "100%",
        }}
        label="Password"
        width="100%"
      />
      <Box display="flex" justifyContent="center" marginTop="20px" width="100%">
        <Button label="Sign Up" width="100%" onClick={onClick} />
      </Box>
      <Box display="flex" justifyContent="center" marginTop="20px" width="100%">
        <Link href={href} label="Aldready have an account? Sign In" />
      </Box>
    </Box>
  );
};

export type { SignupRightContainer_Props };
export { SignupRightContainer };
