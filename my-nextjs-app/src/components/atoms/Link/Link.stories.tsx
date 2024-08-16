import type { Meta, StoryObj } from "@storybook/react";
import { Link_frame } from "./Link";

const meta: Meta<typeof Link_frame> = {
  title: "Components/Atoms/Link_frame",
  component: Link_frame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Link_frame>;

export const Default: Story = {
  args: {},
};