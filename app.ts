import { Surreal } from "surrealdb.js";
console.log({ init: "inside the app.ts" });
const db = new Surreal();
console.log({ db });
async function main() {
  console.log({ main: "inside main" });
  try {
    console.log({ connection: "creating connection" });
    const connection = await db.connect("http://0.0.0.0:8000/rpc", {
      ns: "test",
      db: "test",
      auth: {
        user: "root",
        pass: "root",
      },
    });
    console.log({ connection: "connection created" });
    console.log({ connection });

    // Create a new person with a random id
    console.log({ created: "creating person" });
    const created = await db.create("person", {
      title: "Founder & CEO",
      name: {
        first: "Toby",
        last: "Morgan Hitchcock",
      },
      marketing: true,
      identifier: Math.random().toString(36).substr(2, 10),
    });

    console.log({ created: "person created" });
    console.log({ created });
    console.log({ main: "exited main success" });
  } catch (error) {
    console.error({ error });
    console.log({ main: "exited main with error" });
  }
}

main();
console.log({ init: "exited the app.ts" });
