import {
  Anchor,
  AppShell,
  Burger,
  Flex,
  MantineProvider,
  ScrollArea,
  Skeleton,
  Text,
  useMantineTheme,
} from "@mantine/core";
import "@mantine/core/styles.css";

import { useDisclosure } from "@mantine/hooks";

export function AppShellComponent() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell
        header={{
          height: { md: 120, base: 60 },
          collapsed: false,
          offset: true,
        }}
        navbar={{
          width: 300,
          breakpoint: "md",
          collapsed: { mobile: !opened, desktop: opened },
        }}
        footer={{
          height: { md: 120, base: 60 },
          offset: true,
        }}
        padding="md"
      >
        <AppShell.Header>
          <Flex gap="md" align="center" px="md" style={{ height: "100%" }}>
            <Burger
              opened={opened}
              onClick={() => {
                toggle();
              }}
              size="sm"
            />
            <Text size="lg">Header</Text>
          </Flex>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <ScrollArea offsetScrollbars="y">
            <Flex direction="column" gap="lg">
              <Text
                style={{
                  position: "sticky",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  backgroundColor: "initial",
                }}
              >
                Navbar
              </Text>
              <Flex direction="column" gap="md">
                {Array(15)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} h={28} animate={false} />
                  ))}
              </Flex>
            </Flex>
          </ScrollArea>
        </AppShell.Navbar>

        <AppShell.Main>
          <ScrollArea>Main</ScrollArea>
        </AppShell.Main>

        <AppShell.Aside visibleFrom="md" w="25%" p="md">
          Aside
        </AppShell.Aside>
        <AppShell.Footer p="md">
          <Flex
            gap="md"
            justify="space-between"
            align="center"
            px="md"
            style={{ height: "100%" }}
          >
            <Text>Astro</Text>
            <Text>
              Made by{" "}
              <Anchor href="https://github.com/usamazansari" target="_blank">
                @usamazansari
              </Anchor>
            </Text>
          </Flex>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
}
