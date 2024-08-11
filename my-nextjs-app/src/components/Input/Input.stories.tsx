import type { Meta, StoryObj } from '@storybook/react';
import { Input_frame } from './Input';

const meta: Meta<typeof Input_frame> = {
  title: 'Components/Input_frame',
  component: Input_frame,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Input_frame>;

export const Default: Story = {
  args: {},
};