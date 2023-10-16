import { Box, Divider, Drawer, Flex, ScrollArea, Text, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useMemo } from 'react';

function NavigationButton({ href, icon, label }: { href: string | undefined; icon: string; label: string }) {
  return (
    <UnstyledButton component="a" variant="transparent" href={href} p="sm">
      <Text size="lg" className="flex gap-1 items-center">
        <span className="material-icons text-color-accent-emphasis">{icon}</span>
        <span className="">{label}</span>
      </Text>
    </UnstyledButton>
  );
}

export function DrawerComponent({ opened, close }: { opened: boolean; close: () => void }) {
  const theme = useMantineTheme();
  const { width } = useViewportSize();
  const breakpoint = useMemo(() => {
    const number = theme.breakpoints.md.match(/\d+/);
    return !number ? 992 : +number[0] * theme.scale * 16;
  }, [theme.breakpoints.md, theme.scale]);
  const isNarrowViewport = useMemo(() => width < breakpoint, [breakpoint, width]);

  const menuItems = useMemo(
    () => [
      { icon: 'home', label: 'Home', href: '/' },
      { icon: 'dashboard', label: 'Dashboard', href: '/dashboard', isProtected: true },
      { icon: 'account_balance_wallet', label: 'Pocketbooks', href: '/pocketbooks', isProtected: true },
      { icon: 'account_circle', label: 'Profile', href: '/profile', isProtected: true, isBottomSection: true },
      { icon: 'fingerprint', label: 'Auth', href: '/auth', isBottomSection: true },
    ],
    [],
  );

  return (
    <Drawer.Root opened={opened} onClose={close} size={isNarrowViewport ? '100%' : 'md'} scrollAreaComponent={ScrollArea.Autosize}>
      <Drawer.Overlay visibleFrom="sm" backgroundOpacity={0.5} blur={4} />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title className="cursor-default">
            <Text size="lg" fw="bold">
              Navigation
            </Text>
          </Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Divider />
        <Drawer.Body p={0}>
          <Flex direction="column" justify="space-between">
            <Box className="grid gap-1">
              {menuItems
                .filter(({ isBottomSection }) => !isBottomSection)
                .map(({ href, icon, label }) => (
                  <NavigationButton key={label} href={href} icon={icon} label={label}></NavigationButton>
                ))}
            </Box>
            <Box className="grid gap-1">
              {menuItems
                .filter(({ isBottomSection }) => isBottomSection)
                .map(({ href, icon, label }) => (
                  <NavigationButton key={label} href={href} icon={icon} label={label}></NavigationButton>
                ))}
            </Box>
          </Flex>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
