import type { Meta, StoryObj } from "@storybook/react";
import { SignupRightContainer } from "./SignupRightContainer";

const meta: Meta<typeof SignupRightContainer> = {
  title: "Sections/Signup/SignupRightContainer",
  component: SignupRightContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SignupRightContainer>;

export const Default: Story = {
  args: {},
};
