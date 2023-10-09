import type { Meta, StoryObj } from "@storybook/react";
import { ExamplePage } from ".";

const meta = {
  title: "Example/Page",
  component: ExamplePage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof ExamplePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
