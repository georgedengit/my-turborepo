import { Anchor, AppShell, Burger, List, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "ui";

export const ExamplePage = () => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <AppShell.Header>
        <Burger
          hiddenFrom="sm"
          opened={mobileOpened}
          onClick={toggleMobile}
          size="sm"
        />
        <div>Header</div>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <Button onClick={toggleDesktop} visibleFrom="sm">
          Toggle navbar
        </Button>
        <Title order={2} mb={2}>
          Pages in Storybook
        </Title>
        <Text>
          We recommend building UIs with a{" "}
          <Anchor
            href="https://componentdriven.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Text fw={700} span>
              component-driven
            </Text>
          </Anchor>{" "}
          process starting with atomic components and ending with pages.
        </Text>
        <Text>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </Text>
        <List>
          <List.Item>
            Use a higher-level connected component. Storybook helps you compose
            such data from the "args" of child component stories
          </List.Item>
          <List.Item>
            Assemble data in the page component from your services. You can mock
            these services out using Storybook.
          </List.Item>
        </List>
        <Text>
          Get a guided tutorial on component-driven development at{" "}
          <Anchor
            href="https://storybook.js.org/tutorials/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Storybook tutorials
          </Anchor>
          . Read more in the{" "}
          <Anchor
            href="https://storybook.js.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs
          </Anchor>
          .
        </Text>
      </AppShell.Main>
    </AppShell>
  );
};
