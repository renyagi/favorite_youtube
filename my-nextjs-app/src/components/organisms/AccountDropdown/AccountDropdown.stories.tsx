import type { Meta, StoryObj } from "@storybook/react";
import { AccountDropdown } from "./AccountDropdown";

const meta: Meta<typeof AccountDropdown> = {
  title: "Components/Organisms/AccountDropdown",
  component: AccountDropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AccountDropdown>;

export const Default: Story = {
  args: {},
};
