import type { Meta, StoryObj } from "@storybook/react";
import { Link_s } from "./Link";

const meta: Meta<typeof Link_s> = {
  title: "Components/Atoms/Link",
  component: Link_s,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Link_s>;

export const Default: Story = {
  args: {},
};
