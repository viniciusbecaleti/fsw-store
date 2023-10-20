import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Session } from "next-auth";
import { Separator } from "./separator";

interface ProfileProps {
  session: Session;
}

const Profile = async ({ session }: ProfileProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 py-4">
        <Avatar>
          {session?.user?.image && <AvatarImage src={session.user.image} />}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="flex flex-col">
          <p className="font-medium">{session.user?.name}</p>
          <span className="text-sm opacity-75">Boas compras!</span>
        </div>
      </div>

      <Separator />
    </div>
  );
};

export default Profile;
