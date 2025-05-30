import { prisma } from '@/lib/prisma'

export default async function TestePage() {
  const categorias = await prisma.categoria.findMany()

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Categorias</h1>
      <ul className="list-disc pl-5">
        {categorias.map((categoria: Categoria) => (
          <li key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>
    </main>
  )
}
