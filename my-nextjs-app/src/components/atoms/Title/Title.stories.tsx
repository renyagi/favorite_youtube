import type { Meta, StoryObj } from "@storybook/react";
import { Title_frame } from "./Title";

const meta: Meta<typeof Title_frame> = {
  title: "Components/Atoms/Title_frame",
  component: Title_frame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Title_frame>;

export const Default: Story = {
  args: {},
};