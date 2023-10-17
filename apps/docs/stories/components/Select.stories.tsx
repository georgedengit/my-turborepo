import {
  Code,
  ComboboxItem,
  Group,
  OptionsFilter,
  SegmentedControl,
  Stack,
  Switch,
  Text,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Select } from "ui";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodoc"],
  argTypes: {
    clearable: { type: "boolean" },
    description: { type: "string" },
    nothingFoundMessage: { type: "string" },
    searchable: { type: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const exampleData = ["React", "Angular", "Vue", "Svelte"];

export const Default: Story = {
  args: {
    data: exampleData,
    label: "Your favorite library",
    placeholder: "Pick value",
  },
  render: (props) => (
    <Stack align="start">
      <Select {...props} />
    </Stack>
  ),
};

export const Controlled: Story = {
  args: Default.args,
  render: (props) => {
    const [value, setValue] = useState<string | null>("");

    return (
      <Stack align="start">
        <Select {...props} value={value} onChange={setValue} />
      </Stack>
    );
  },
};

export const Clearable: Story = {
  ...Default,
  args: {
    ...Default.args,
    clearable: true,
  },
};

export const Searchable: Story = {
  ...Default,
  args: {
    ...Default.args,
    searchable: true,
  },
};

export const NothingFound: Story = {
  ...Default,
  args: {
    ...Default.args,
    nothingFoundMessage: "Nothing found...",
    searchable: true,
  },
};

export const CheckedOptionIcon: Story = {
  args: {
    ...Default.args,
    dropdownOpened: true,
    defaultValue: "React",
  },
  render: (props) => {
    const [withCheckedIcon, toggleCheckedIcon] = useToggle([true, false]);
    const [checkedIconPosition, setCheckedIconPosition] = useState("left");

    return (
      <Stack align="start">
        <Group>
          <Select
            {...props}
            checkIconPosition={
              checkedIconPosition === "right" ? "right" : "left"
            }
            withCheckIcon={withCheckedIcon}
          />
          <Stack>
            <Switch
              checked={withCheckedIcon}
              onChange={(e) => toggleCheckedIcon(e.currentTarget.checked)}
              label="With checked icon"
            />
            <SegmentedControl
              value={checkedIconPosition}
              onChange={setCheckedIconPosition}
              data={["left", "right"]}
            />
          </Stack>
        </Group>
      </Stack>
    );
  },
};

const customData = [
  {
    group: "Frontend",
    items: [
      { value: "react", label: "React" },
      { value: "ng", label: "Angular" },
    ],
  },
  {
    group: "Backend",
    items: [
      { value: "express", label: "Express" },
      { value: "django", label: "Django" },
    ],
  },
];

export const DataFormats: Story = {
  args: {
    ...Default.args,
    data: customData,
  },
  render: (props) => {
    return (
      <Stack align="start">
        <Select {...props} />
        <Text>Example of data prop using groups of objects</Text>
        <Code block>{`<Select data={${JSON.stringify(
          customData,
          null,
          2
        )}} />`}</Code>
      </Stack>
    );
  },
};

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(" ");

  return (options as Array<ComboboxItem>).filter((option) => {
    const words = option.label.toLowerCase().trim().split(" ");

    return splittedSearch.every((searchWord) =>
      words.some((word) => word.includes(searchWord))
    );
  });
};

export const OptionsFiltering: Story = {
  args: {
    ...Default.args,
    data: ["Great Britain", "Russian Federation", "United States"],
    label: "Your country",
    filter: optionsFilter,
    placeholder: "Pick value",
    searchable: true,
  },
  render: (props) => {
    return (
      <Stack align="start">
        <Select {...props} />
        <Text>
          Example of a custom filter function that matches options by words
          instead of letters sequence
        </Text>
      </Stack>
    );
  },
};

const sortOptionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

const unsortedData = ["4 - React", "1 - Angular", "3 - Vue", "2 - Svelte"];

export const SortOptions: Story = {
  args: {
    ...Default.args,
    data: unsortedData,
    description:
      "By default, options are sorted by their position in the data array. You can change this behavior with filter function",
    filter: sortOptionsFilter,
    nothingFoundMessage: "Nothing found...",
    searchable: true,
  },
  render: (props) => {
    return (
      <Stack align="start">
        <Select {...props} />
        <Text>Original array:</Text>
        <Code block>{unsortedData.join(", ")}</Code>
      </Stack>
    );
  },
};
