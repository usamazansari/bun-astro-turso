import { Avatar, Box, Divider, Drawer, NavLink, ScrollArea, Text, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import { useMemo } from 'react';

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
      { icon: 'account_circle', label: 'Profile', href: '/profile', isProtected: true },
      { icon: 'fingerprint', label: 'Auth', href: '/auth' },
    ],
    [],
  );

  return (
    <Drawer.Root opened={opened} onClose={close} size={isNarrowViewport ? '100%' : 'md'} scrollAreaComponent={ScrollArea.Autosize}>
      <Drawer.Overlay visibleFrom="sm" backgroundOpacity={0.5} blur={4} />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title className="cursor-default">
            <Text>Navigation</Text>
          </Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Divider />
        <Drawer.Body p={0}>
          <Box className="grid gap-4">
            <Box className="grid gap-2">
              <Avatar size="100%" variant="transparent" className="max-h-96" />
              <Text ta="center" fw={700}>
                John Doe
              </Text>
            </Box>
            <Divider />
            <Box className="grid">
              {menuItems.map(({ href, icon, label }) => (
                <NavLink variant="subtle" key={label} label={label} leftSection={<span className="material-icons">{icon}</span>} href={href} />
              ))}
              <NavLink variant="subtle" label="Blog" leftSection={<span className="material-icons">article</span>} href="/posts/post-1" />
            </Box>
          </Box>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}
