import { Badge } from "@/components/ui/badge"
import { Category } from "@prisma/client";
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryButtonProps {
  category: Category
}

export function CategoryButton({ category }: CategoryButtonProps) {
  const categoryIcon = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />
  }

  return (
    <Badge variant="outline" className="py-3 items-center justify-center gap-2 rounded-lg">
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="font-semibold text-xs">{category.name}</span>
    </Badge>
  )
}