import { Burger, Divider, Flex, MantineProvider, Switch, useMantineColorScheme, type MantineColorScheme, Title } from '@mantine/core';
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
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      <nav className="sticky top-0 left-0 right-0 bg-[#ffffff] dark:bg-color-header-bg">
        <Flex gap="md" align="center" justify="space-between" px="md" style={{ minHeight: '60px' }}>
          <Flex gap="md">
            <DrawerComponent opened={opened} close={close} />
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
            <Title order={4}>Expenses Tracker</Title>
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
