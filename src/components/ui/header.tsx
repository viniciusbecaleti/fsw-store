import {
  HomeIcon,
  ListOrderedIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";
import AutenticationButton from "../AutenticationButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "./profile";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <Card className="flex items-center justify-between rounded-none border-l-0 border-r-0 border-t-0 p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-4 flex flex-col gap-2">
            {!session && <AutenticationButton />}
            {session && <Profile session={session} />}

            <Button variant="outline" className="w-full justify-start gap-3">
              <HomeIcon size={16} /> Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-3">
              <PercentIcon size={16} /> Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-3">
              <ListOrderedIcon size={16} /> Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
