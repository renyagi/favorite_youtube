import type { Meta, StoryObj } from "@storybook/react";
import { AccountInfo } from "./AccountInfo";

const meta: Meta<typeof AccountInfo> = {
  title: "Components/Molecules/AccountInfo",
  component: AccountInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AccountInfo>;

export const Default: Story = {
  args: {},
};
