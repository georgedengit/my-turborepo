import { Code, Group, Space, Stack } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextInput } from "ui";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodoc"],
  argTypes: {
    variant: {},
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Input label",
    description: "Input description",
    placeholder: "Input placeholder",
  },
  render: (props) => (
    <Group justify="start">
      <TextInput {...props} />
    </Group>
  ),
};

type ControlledDemo = {
  input1: string;
};

export const Controlled: Story = {
  args: Default.args,
  render: (props) => {
    const [data, setData] = useState<ControlledDemo>();
    const { register, handleSubmit } = useForm<ControlledDemo>();

    const onSubmit = handleSubmit(setData);

    return (
      <>
        <form onSubmit={onSubmit}>
          <Stack w={300}>
            <TextInput {...props} {...register("input1")} />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
        <Space h="md" />
        <Code block>{JSON.stringify(data, null, 2)}</Code>
      </>
    );
  },
};
