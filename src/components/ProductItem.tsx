import { ProductWithTotalPrice } from "@/utils/product";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-[80%] object-contain"
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 flex items-center gap-[2px] px-2 py-[2px]">
            <ArrowDown size={14} />
            {product.discountPercentage}%
          </Badge>
        )}
      </div>
      <div>
        <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">
          {product.name}
        </h2>
        <div className="flex items-center gap-1">
          {product.discountPercentage > 0 && (
            <>
              <p className="font-semibold">
                R$ {product.totalPrice.toFixed(2)}
              </p>
              <p className="text-xs line-through opacity-40">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          )}

          {product.discountPercentage === 0 && (
            <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
