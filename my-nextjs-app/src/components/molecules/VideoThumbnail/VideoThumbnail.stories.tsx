import type { Meta, StoryObj } from "@storybook/react";
import { VideoThumbnail } from "./VideoThumbnail";

const meta: Meta<typeof VideoThumbnail> = {
  title: "Components/Molecules/VideoThumbnail",
  component: VideoThumbnail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof VideoThumbnail>;

export const Default: Story = {
  args: {},
};
