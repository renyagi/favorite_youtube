import React from "react";
import { Box } from "@chakra-ui/react";
import { NewPasswordForm } from "../NewPasswordForm/NewPasswordForm";
import { HeroSection_frame } from "../../../components/organisms/HeroSection/HeroSection";

interface NewPasswordPage_Props {
  href?: string;
  password1?: string;
  password2?: string;
  onClick?: (email?: string, password?: string) => void;
}

const NewPasswordPage = ({
  href,
  password1,
  password2,
  onClick,
}: NewPasswordPage_Props) => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="space-between"
      width="100vw"
    >
      <HeroSection_frame
        // img="#"
        isSub={true}
        subTitle="Endless entertainment, curated just for you."
        title="Watch What You Love"
        width="100%"
      />
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        margin="30px"
      >
        <NewPasswordForm
          href={href}
          password1={password1}
          password2={password2}
          onClick={onClick}
        />
      </Box>
    </Box>
  );
};

export type { NewPasswordPage_Props };
export { NewPasswordPage };
