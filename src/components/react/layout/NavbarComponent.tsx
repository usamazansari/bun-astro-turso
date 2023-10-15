import { Burger, Divider, Drawer, Flex, MantineProvider, ScrollArea, Switch, useMantineColorScheme, type MantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { theme } from '../../../config/mantine/mantine.theme';
import { DrawerComponent } from './DrawerComponent';

function DarkModeSwitch({ setColorScheme }: { setColorScheme: (scheme: MantineColorScheme) => void }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Switch
      size="lg"
      onLabel={<span className="text-sm material-icons">light_mode</span>}
      offLabel={<span className="text-sm material-icons">dark_mode</span>}
      onChange={() => {
        toggleColorScheme();
        setColorScheme(colorScheme);
      }}
    />
  );
}

export function NavbarComponent() {
  const [opened, { open, close }] = useDisclosure();
  const [colorScheme, setColorScheme] = useState('auto' as MantineColorScheme);

  return (
    <MantineProvider theme={{ ...theme, primaryColor: 'blue' }} defaultColorScheme={colorScheme}>
      <nav className="sticky top-0 left-0 right-0">
        <Flex gap="md" align="center" justify="space-between" px="md" style={{ minHeight: '60px' }}>
          <Flex gap="md">
            <Drawer.Root hiddenFrom="sm" opened={opened} onClose={close} size="100%" scrollAreaComponent={ScrollArea.Autosize}>
              <DrawerComponent />
            </Drawer.Root>
            <Drawer.Root opened={opened} visibleFrom="sm" onClose={close} scrollAreaComponent={ScrollArea.Autosize}>
              <Drawer.Overlay backgroundOpacity={0.5} blur={4} />
              <DrawerComponent />
            </Drawer.Root>
            <Burger
              opened={opened}
              onClick={() => {
                open();
              }}
              size="sm"
              type="button"
              title="Toggle Sidebar"
              style={{ alignSelf: 'center' }}
            />
          </Flex>
          <Flex>
            <DarkModeSwitch setColorScheme={setColorScheme} />
          </Flex>
        </Flex>
        <Divider />
      </nav>
    </MantineProvider>
  );
}
