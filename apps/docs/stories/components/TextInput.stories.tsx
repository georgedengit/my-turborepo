import { Code, Group, Stack } from "@mantine/core";
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

export const Controlled: Story = {
  args: Default.args,
  render: (props) => {
    const [value, setValue] = useState("");

    return (
      <Stack align="start">
        <TextInput
          {...props}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Code block>{`value: ${JSON.stringify(value, null, 2)}`}</Code>
      </Stack>
    );
  },
};

type ExampleForm = {
  input1: string;
};

export const Form: Story = {
  args: Default.args,
  render: (props) => {
    const [data, setData] = useState<ExampleForm>();
    const { register, handleSubmit } = useForm<ExampleForm>();

    const onSubmit = handleSubmit(setData);

    return (
      <Stack align="start">
        <form onSubmit={onSubmit}>
          <Stack>
            <TextInput {...props} {...register("input1")} />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
        {data && <Code block>{JSON.stringify(data, null, 2)}</Code>}
      </Stack>
    );
  },
};
