import { prismaClient } from "@/lib/prisma"
import { CategoryButton } from "./CategoryButton"

export async function Categories() {
  const categories = await prismaClient.category.findMany()

  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-3">
      {categories.map(category => (
        <CategoryButton key={category.id} category={category} />
      ))}
    </div>
  )
}