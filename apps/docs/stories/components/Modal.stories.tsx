import { Container } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Modal } from "ui";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodoc"],
  argTypes: {
    title: { type: "string" },
    centered: { type: "boolean" },
    withCloseButton: { type: "boolean", defaultValue: true },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (props) => {
    const [opened, { open, close }] = useDisclosure();

    return (
      <>
        <Modal {...props} opened={opened} onClose={close}>
          <Container>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            aperiam reiciendis sunt assumenda nam ea magnam veniam ipsam.
            Laborum reiciendis excepturi quas nemo illo asperiores, quia
            quaerat! Quibusdam, ipsum placeat!
          </Container>
        </Modal>

        <Button onClick={open}>Open Modal</Button>
      </>
    );
  },
};

export const CenterVertically: Story = {
  ...Default,
  args: {
    centered: true,
  },
};

export const WithTitle: Story = {
  ...Default,
  args: {
    title: "Modal Title",
  },
};

export const NoHeader: Story = {
  ...Default,
  args: {
    withCloseButton: false,
  },
};
