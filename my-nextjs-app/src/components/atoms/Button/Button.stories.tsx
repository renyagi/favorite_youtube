import type { Meta, StoryObj } from "@storybook/react";
import { Button_s } from "./Button";

const meta: Meta<typeof Button_s> = {
  title: "Components/Atoms/Button",
  component: Button_s,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button_s>;

export const Default: Story = {
  args: {},
};
