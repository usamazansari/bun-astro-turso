import { Box, Drawer, Flex, Text, UnstyledButton } from '@mantine/core';
import { useMemo } from 'react';

function NavigationButton({ href, icon, label }: { href: string | undefined; icon: string; label: string }) {
  return (
    <UnstyledButton component="a" variant="transparent" href={href} p="md">
      <Text size="lg" className="flex gap-1 items-center">
        <span className="material-icons text-2xl text-color-accent-emphasis dark:text-color-danger-fg">{icon}</span>
        {label}
      </Text>
    </UnstyledButton>
  );
}

export function DrawerComponent() {
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
    <Drawer.Content>
      <Drawer.Header>
        <Drawer.Title className="cursor-default">
          <Text size="lg" fw="bold">
            Navigation
          </Text>
        </Drawer.Title>
        <Drawer.CloseButton />
      </Drawer.Header>
      <Drawer.Body p={0}>
        <Flex direction="column" justify="space-between">
          <Box className="grid">
            {menuItems
              .filter(({ isBottomSection }) => !isBottomSection)
              .map(({ href, icon, label }) => (
                <NavigationButton key={label} href={href} icon={icon} label={label}></NavigationButton>
              ))}
          </Box>
          <Box className="grid">
            {menuItems
              .filter(({ isBottomSection }) => isBottomSection)
              .map(({ href, icon, label }) => (
                <NavigationButton key={label} href={href} icon={icon} label={label}></NavigationButton>
              ))}
          </Box>
        </Flex>
      </Drawer.Body>
    </Drawer.Content>
  );
}
