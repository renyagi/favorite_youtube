import type { Meta, StoryObj } from "@storybook/react";
import { NewPasswordForm } from "./NewPasswordForm";

const meta: Meta<typeof NewPasswordForm> = {
  title: "Sections/PasswordReset/NewPasswordForm",
  component: NewPasswordForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NewPasswordForm>;

export const Default: Story = {
  args: {},
};
