import type { Meta, StoryObj } from "@storybook/react";
import { Button_frame } from "./Button";

const meta: Meta<typeof Button_frame> = {
  title: "Components/Atoms/Button_frame",
  component: Button_frame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button_frame>;

export const Default: Story = {
  args: {},
};