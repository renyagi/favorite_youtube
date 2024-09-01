import type { Meta, StoryObj } from "@storybook/react";
import { AccountButton } from "./AccountButton";

const meta: Meta<typeof AccountButton> = {
  title: "Components/Atoms/AccountButton",
  component: AccountButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AccountButton>;

export const Default: Story = {
  args: {},
};
