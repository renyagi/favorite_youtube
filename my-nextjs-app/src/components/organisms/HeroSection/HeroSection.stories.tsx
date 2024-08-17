import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection_frame } from "./HeroSection";

const meta: Meta<typeof HeroSection_frame> = {
  title: "Components/Organisms/HeroSection_frame",
  component: HeroSection_frame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof HeroSection_frame>;

export const Default: Story = {
  args: {},
};