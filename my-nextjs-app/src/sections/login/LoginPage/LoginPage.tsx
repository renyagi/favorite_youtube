import React from "react";
import { Box } from "@chakra-ui/react";
import { LoginRightContainer } from "../LoginRightContainer/LoginRightContainer";
import { HeroSection } from "../../../components/organisms/HeroSection/HeroSection";

interface LoginPage_Props {
  email?: string;
  href?: string;
  password?: string;
  onClick?: (email?: string, password?: string) => void;
}

const LoginPage = ({ email, href, password, onClick }: LoginPage_Props) => {
  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="space-between"
      width="100vw"
    >
      <HeroSection
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
        <LoginRightContainer
          email={email}
          href={href}
          password={password}
          onClick={onClick}
        />
      </Box>
    </Box>
  );
};

export type { LoginPage_Props };
export { LoginPage };
