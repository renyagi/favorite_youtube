import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "./LoginPage";

const meta: Meta<typeof LoginPage> = {
  title: "Sections/Login/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {
  args: {},
};
