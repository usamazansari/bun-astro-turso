import { Button, Card, Flex, Group, MantineProvider, Text, Title } from '@mantine/core';
import { useCallback, useState } from 'react';
import { theme } from '../../config/mantine/mantine.theme';
import { useTursoClient } from '../../hooks';

export function CardViewerComponent({ url, authToken }: { url: string | undefined; authToken: string | undefined }) {
  const { client } = useTursoClient({ url: url, authToken: authToken });

  const [users, setUsers] = useState<Record<string, unknown>>();
  const [scores, setScores] = useState<Record<string, unknown>>();

  const fetchFromDB = useCallback(() => {
    const fetchData = async () => {
      try {
        if (client) {
          const { columns: usersColumns, rows: usersRows } = await client.execute('SELECT * FROM example_users');
          setUsers({ usersColumns, usersRows });
          const { columns: scoresColumns, rows: scoresRows } = await client.execute({
            sql: 'select * from example_scores',
            args: [],
          });
          setScores({ scoresColumns, scoresRows });
        }
      } catch (e) {
        console.error({ e });
      }
    };
    fetchData();
  }, [client]);

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text size="sm">Click on the button to fetch data from the database</Text>
        </Group>

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={() => {
            fetchFromDB();
          }}>
          Fetch data
        </Button>

        <Flex direction={'column'}>
          <Title>Users</Title>
          {users ? <Text>{JSON.stringify(users)}</Text> : <Text>Unable to load users</Text>}
        </Flex>
        <Flex direction={'column'}>
          <Title>Scores</Title>
          {scores ? <Text>{JSON.stringify(scores)}</Text> : <Text>Unable to load scores</Text>}
        </Flex>
      </Card>
    </MantineProvider>
  );
}
