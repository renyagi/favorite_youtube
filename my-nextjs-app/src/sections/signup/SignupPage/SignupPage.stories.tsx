import type { Meta, StoryObj } from "@storybook/react";
import { SignupPage } from "./SignupPage";

const meta: Meta<typeof SignupPage> = {
  title: "Sections/Signup/SignupPage",
  component: SignupPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SignupPage>;

export const Default: Story = {
  args: {},
};