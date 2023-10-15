import { Anchor, Divider, Flex, MantineProvider, Text } from '@mantine/core';
import '@mantine/core/styles.css';

export function FooterComponent() {
  return (
    <MantineProvider>
      <footer>
        <Divider />
        <Flex gap="md" px="md" style={{ minHeight: '60px' }}>
          <Flex justify="space-between" className="w-full">
            <Text className="self-center">Expenses Tracker</Text>
            <Text className="self-center">
              Made by{' '}
              <Anchor href="https://github.com/usamazansari" target="_blank" underline="hover">
                @usamazansari
              </Anchor>
            </Text>
          </Flex>
        </Flex>
      </footer>
    </MantineProvider>
  );
}
