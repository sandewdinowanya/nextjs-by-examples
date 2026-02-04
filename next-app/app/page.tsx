import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Hello, world!</h1>
      <Link href="/users">Users</Link>
    </main>
  );
}
