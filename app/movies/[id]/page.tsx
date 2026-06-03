export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <main>
      <h1>Movie ID: {id}</h1>
    </main>
  )
}