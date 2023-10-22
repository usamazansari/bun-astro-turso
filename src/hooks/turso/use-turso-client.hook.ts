import { createClient } from '@libsql/client/web';

export function useTursoClient({ url, authToken }: { url: string | undefined; authToken: string | undefined }) {
  return { client: url && authToken ? createClient({ authToken, url }) : null };
}
