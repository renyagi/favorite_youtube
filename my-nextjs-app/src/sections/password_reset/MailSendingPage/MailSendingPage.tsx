import React from "react";
import { Box } from "@chakra-ui/react";
import { MailSendingContainer } from "../MailSendingContainer/MailSendingContainer";
import { HeroSection_frame } from "../../../components/organisms/HeroSection/HeroSection";

interface MailSendingPage_Props {
  email?: string;
  href?: string;
  isSent?: boolean;
  onClick?: (email?: string, password?: string) => void;
}

const MailSendingPage = ({
  email,
  href,
  isSent = false,
  onClick,
}: MailSendingPage_Props) => {
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
        <MailSendingContainer
          email={email}
          href={href}
          isSent={isSent}
          onClick={onClick}
        />
      </Box>
    </Box>
  );
};

export type { MailSendingPage_Props };
export { MailSendingPage };