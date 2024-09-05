import type { Meta, StoryObj } from "@storybook/react";
import { SidebarButton } from "./SidebarButton";

const meta: Meta<typeof SidebarButton> = {
  title: "Components/Molecules/SidebarButton",
  component: SidebarButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SidebarButton>;

export const Default: Story = {
  args: {},
};
