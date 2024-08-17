import React from "react";
import { Box } from "@chakra-ui/react";
import { SignupRightContainer } from "../SignupRightContainer/SignupRightContainer";
import { HeroSection_frame } from "../../../components/organisms/HeroSection/HeroSection";

interface SignupPage_Props {
  email?: string;
  href?: string;
  name?: string;
  password?: string;
  onClick?: (email?: string, password?: string) => void;
}

const SignupPage = ({
  email,
  href,
  name,
  password,
  onClick,
}: SignupPage_Props) => {
  return (
    <Box
      display="flex"
      height="100vh"
      gap="30px"
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
      >
        <SignupRightContainer
          email={email}
          href={href}
          name={name}
          password={password}
          onClick={onClick}
        />
      </Box>
    </Box>
  );
};

export type { SignupPage_Props };
export { SignupPage };