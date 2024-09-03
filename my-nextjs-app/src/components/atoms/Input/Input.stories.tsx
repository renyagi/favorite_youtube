import type { Meta, StoryObj } from "@storybook/react";
import { Input_s } from "./Input";

const meta: Meta<typeof Input_s> = {
  title: "Components/Atoms/Input",
  component: Input_s,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Input_s>;

export const Default: Story = {
  args: {},
};
