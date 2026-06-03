import { submitForm } from "./actions";

export default function Home() {
  return (
    <main>
      <h1>Server Action Demo</h1>

      <form action={submitForm}>
        <input
          name="name"
          placeholder="Enter name"
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}