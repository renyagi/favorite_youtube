import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "./Title";

const meta: Meta<typeof Title> = {
  title: "Components/Atoms/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {},
};
