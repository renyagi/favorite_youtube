import type { Meta, StoryObj } from "@storybook/react";
import { ArtistIcon } from "./ArtistIcon";

const meta: Meta<typeof ArtistIcon> = {
  title: "Components/Molecules/ArtistIcon",
  component: ArtistIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ArtistIcon>;

export const Default: Story = {
  args: {},
};
