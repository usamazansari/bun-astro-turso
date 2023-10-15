import { Badge, Button, Card, Group, Modal, Text, Tooltip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ModalFromCard } from './ModalFromCard';

export function CardViewerComponent() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway.
      </Text>

      <Modal opened={opened} onClose={close} title="Book">
        <ModalFromCard />
      </Modal>

      <Tooltip label="Book now!" withArrow>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={open}>
          Book classic tour now
        </Button>
      </Tooltip>
    </Card>
  );
}
