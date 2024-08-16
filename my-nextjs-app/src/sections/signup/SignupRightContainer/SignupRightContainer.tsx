import React from "react";
import { useRouter } from 'next/router';
import { Box } from "@chakra-ui/react";
import { Button_frame } from "../../../components/atoms/Button/Button";
import { Form_frame } from "../../../components/molecules/Form/Form";
import { Link_frame } from "../../../components/atoms/Link/Link";
import { Title_frame } from "../../../components/atoms/Title/Title";

interface SignupRightContainer_Props {
  email?: string;
  name?: string;
  password?: string;
  onClick?: (email?: string, name?: string, password?: string) => void;
}

const SignupRightContainer = ({
  email,
  name,
  password,
  onClick,
}: SignupRightContainer_Props) => {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) {
      onClick(email, name, password);
      router.push("#");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="30px"
      justifyContent="center"
      width="424px"
    >
      <Title_frame
        title="Create your account"
      />
      <Form_frame
        input_Props={{
          placeholder: "Enter your name",
          value: name,
          width: "100%",
        }}
        label="Full name"
        width="100%"
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
      <Form_frame
        input_Props={{
          placeholder: "Type your password",
          value: password,
          width: "100%",
        }}
        label="Password"
        width="100%"
      />
      <Box
        display="flex"
        justifyContent="center"
        marginTop="20px"
        width="100%"
      >
        <Button_frame
          label="Sign Up"
          width="100%"
          onClick={handleClick}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        marginTop="20px"
        width="100%"
      >
        <Link_frame
          href="#"
          label="Aldready have an account? Sign In"
        />
      </Box>
    </Box>
  );
};

export type { SignupRightContainer_Props };
export { SignupRightContainer };