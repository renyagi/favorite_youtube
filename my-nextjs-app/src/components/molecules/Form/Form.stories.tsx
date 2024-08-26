import type { Meta, StoryObj } from "@storybook/react";
import { Form_frame } from "./Form";

const meta: Meta<typeof Form_frame> = {
  title: "Components/Molecules/Form_frame",
  component: Form_frame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Form_frame>;

export const Default: Story = {
  args: {},
};
