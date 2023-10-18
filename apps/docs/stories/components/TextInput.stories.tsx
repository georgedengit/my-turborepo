import { Code, SegmentedControl, Stack, rem } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import { IconAt } from "@tabler/icons-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextInput } from "ui";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  tags: ["autodoc"],
  argTypes: {
    description: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: "Input label",
    placeholder: "Input placeholder",
  },
  render: (props) => {
    const [variant, setVariant] = useState<string>("default");

    return (
      <Stack align="start">
        <SegmentedControl
          value={variant}
          onChange={setVariant}
          data={[
            {
              label: "Default",
              value: "default",
            },
            {
              label: "Filled",
              value: "filled",
            },
            {
              label: "Unstyled",
              value: "unstyled",
            },
          ]}
        />
        <TextInput
          {...props}
          variant={variant === "default" ? undefined : variant}
        />
      </Stack>
    );
  },
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

export const Sections: Story = {
  args: {
    ...Default.args,
    label: "Your email",
    placeholder: "Your email",
  },
  render: (props) => {
    const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

    return (
      <Stack align="start">
        <TextInput
          {...props}
          leftSectionPointerEvents="none"
          leftSection={icon}
        />
        <TextInput
          {...props}
          rightSectionPointerEvents="none"
          rightSection={icon}
        />
      </Stack>
    );
  },
};

export const Error: Story = {
  args: Default.args,
  render: (props) => (
    <Stack align="start">
      <TextInput
        {...props}
        label="Boolean error"
        placeholder="Boolean error"
        error
      />
      <TextInput
        {...props}
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </Stack>
  ),
};

export const Disabled: Story = {
  args: Default.args,
  render: (props) => (
    <Stack align="start">
      <TextInput
        {...props}
        disabled
        label="Disabled input"
        placeholder="Disabled input"
      />
    </Stack>
  ),
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
