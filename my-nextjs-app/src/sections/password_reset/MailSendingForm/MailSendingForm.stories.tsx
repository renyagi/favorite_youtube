import type { Meta, StoryObj } from "@storybook/react";
import { MailSendingForm } from "./MailSendingForm";

const meta: Meta<typeof MailSendingForm> = {
  title: "Sections/PasswordReset/MailSendingForm",
  component: MailSendingForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MailSendingForm>;

export const Default: Story = {
  args: {},
};