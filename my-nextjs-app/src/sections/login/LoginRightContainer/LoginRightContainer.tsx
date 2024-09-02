import React from "react";
import { Box } from "@chakra-ui/react";
import { Button } from "../../../components/atoms/Button/Button";
import { Form } from "../../../components/molecules/Form/Form";
import { Link } from "../../../components/atoms/Link/Link";
import { Title } from "../../../components/atoms/Title/Title";

interface LoginRightContainer_Props {
  email?: string;
  href?: string;
  password?: string;
  onClick?: (email?: string, password?: string) => void;
}

const LoginRightContainer = ({
  email,
  href,
  password,
  onClick,
}: LoginRightContainer_Props) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      justifyContent="center"
      width="424px"
    >
      <Title
        isSub={true}
        subTitle="Meet the good taste today"
        title="Welcome back!"
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
        isSub={true}
        label="Password"
        link_props={{
          href: "#",
          label: "Forgot Password?",
        }}
        width="100%"
      />
      <Box display="flex" justifyContent="center" marginTop="20px" width="100%">
        <Button label="Sign In" width="100%" onClick={onClick} />
      </Box>
      <Box display="flex" justifyContent="center" marginTop="20px" width="100%">
        <Link href={href} label="Don’t have an account? Sign Up" />
      </Box>
    </Box>
  );
};

export type { LoginRightContainer_Props };
export { LoginRightContainer };
