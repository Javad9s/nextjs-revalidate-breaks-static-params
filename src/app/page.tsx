import { revalidatePath } from "next/cache";
export default function Home() {
  const revalidateAction = async () => {
    "use server";
    revalidatePath("/", "layout");
  };
  return (
    <div>
      Home
      <form action={revalidateAction}>
        <button type="submit">Revalidate</button>
      </form>
    </div>
  );
}
