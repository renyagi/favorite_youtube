import React from "react";
import { useRouter } from 'next/router';
import { Box } from "@chakra-ui/react";
import { Button_frame } from "../../../components/atoms/Button/Button";
import { Form_frame } from "../../../components/molecules/Form/Form";
import { Link_frame } from "../../../components/atoms/Link/Link";
import { Title_frame } from "../../../components/atoms/Title/Title";

interface LoginRightContainer_Props {
  email?: string;
  password?: string;
  onClick?: (email?: string, password?: string) => void;
}

const LoginRightContainer = ({
  email,
  password,
  onClick,
}: LoginRightContainer_Props) => {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) {
      onClick(email, password);
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
        isSub={true}
        subTitle="Meet the good taste today"
        title="Welcome back!"
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
        isSub={true}
        label="Password"
        link_props={{
          href: "#",
          label: "Forgot Password?",
        }}
        width="100%"
      />
      <Box
        display="flex"
        justifyContent="center"
        marginTop="20px"
        width="100%"
      >
        <Button_frame
          label="Sign In"
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
          label="Don’t have an account? Sign Up"
        />
      </Box>
    </Box>
  );
};

export type { LoginRightContainer_Props };
export { LoginRightContainer };