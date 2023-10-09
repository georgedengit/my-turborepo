import { Group } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react";
import { IconArrowRight, IconDownload, IconPhoto } from "@tabler/icons-react";
import { Button } from "ui";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodoc"],
  argTypes: {
    color: { control: "color" },
    fullWidth: { type: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Hello World",
    variant: "default",
    fullWidth: false,
  },
};

export const Filled: Story = {
  args: {
    ...Default.args,
    variant: "filled",
  },
};

export const Light: Story = {
  args: {
    ...Default.args,
    variant: "light",
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

export const Subtle: Story = {
  args: {
    ...Default.args,
    variant: "subtle",
  },
};

export const Transparent: Story = {
  args: {
    ...Default.args,
    variant: "transparent",
  },
};

export const White: Story = {
  args: {
    ...Default.args,
    variant: "white",
  },
};

export const Adornments: Story = {
  render: () => (
    <Group justify="start">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>
      <Button rightSection={<IconDownload size={14} />}>Download</Button>
      <Button
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
        variant="light"
      >
        Visit gallery
      </Button>
    </Group>
  ),
};
