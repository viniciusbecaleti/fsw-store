import { prismaClient } from "@/lib/prisma";
import { CategoryButton } from "./CategoryButton";

export async function Categories() {
  const categories = await prismaClient.category.findMany();

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
      {categories.map((category) => (
        <CategoryButton key={category.id} category={category} />
      ))}
    </div>
  );
}
