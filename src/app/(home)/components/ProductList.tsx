import { ProductItem } from "@/components/ProductItem";
import { productWithTotalPrice } from "@/utils/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={productWithTotalPrice(product)}
        />
      ))}
    </div>
  );
}
