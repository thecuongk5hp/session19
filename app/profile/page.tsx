import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();
  return (
    <>
      <p>
        Họ và tên: {user?.firstName} {user?.lastName}
      </p>
      <p>Email: {user?.emailAddresses[0].emailAddress}</p>
    </>
  );
}