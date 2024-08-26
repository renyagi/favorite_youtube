import type { Meta, StoryObj } from "@storybook/react";
import { LoginRightContainer } from "./LoginRightContainer";

const meta: Meta<typeof LoginRightContainer> = {
  title: "Sections/Login/LoginRightContainer",
  component: LoginRightContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoginRightContainer>;

export const Default: Story = {
  args: {},
};
