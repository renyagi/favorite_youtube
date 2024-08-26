import type { Meta, StoryObj } from "@storybook/react";
import { NewPasswordPage } from "./NewPasswordPage";

const meta: Meta<typeof NewPasswordPage> = {
  title: "Sections/PasswordReset/NewPasswordPage",
  component: NewPasswordPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof NewPasswordPage>;

export const Default: Story = {
  args: {},
};
