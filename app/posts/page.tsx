async function wait(ms: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms)
  )
}

export default async function PostsPage() {
  await wait(2000)

  throw new Error("Failed to load posts")

  return (
    <main>
      <h1>Posts Page</h1>
    </main>
  )
}