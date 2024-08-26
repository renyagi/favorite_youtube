import type { Meta, StoryObj } from "@storybook/react";
import { MailSendingContainer } from "./MailSendingContainer";

const meta: Meta<typeof MailSendingContainer> = {
  title: "Sections/PasswordReset/MailSendingContainer",
  component: MailSendingContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MailSendingContainer>;

export const Default: Story = {
  args: {},
};
