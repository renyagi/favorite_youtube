import type { Meta, StoryObj } from "@storybook/react";
import { Card_frame } from "./Card";

const meta: Meta<typeof Card_frame> = {
  title: "Components/Atoms/Card_frame",
  component: Card_frame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card_frame>;

export const Default: Story = {
  args: {},
};