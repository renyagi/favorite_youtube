import type { Meta, StoryObj } from "@storybook/react";
import { MailSendingPage } from "./MailSendingPage";

const meta: Meta<typeof MailSendingPage> = {
  title: "Sections/PasswordReset/MailSendingPage",
  component: MailSendingPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MailSendingPage>;

export const Default: Story = {
  args: {},
};