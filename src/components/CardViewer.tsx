import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Modal,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ModalFromCard } from "./ModalFromCard";

export function CardViewer() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/* <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section> */}

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Modal opened={opened} onClose={close} title="Book">
        <ModalFromCard />
      </Modal>

      <Tooltip label="Book now!" withArrow>
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={open}
        >
          Book classic tour now
        </Button>
      </Tooltip>
    </Card>
  );
}
