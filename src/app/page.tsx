import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Link href={"/dashboard"}>Dashboard </Link>
    </div>
  );
}
