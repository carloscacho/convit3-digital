import { Righteous } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const font = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function Logo({ size }) {
  return (
    <Link
      href="/"
      className={`
      flex items-center gap-3
    ${font.className}
    `}
    >
      <Image src="/logo.svg" alt="Logo" width={size} height={size} />
      <h1
        className={
          size == "100"
            ? "text-5xl leading-10"
            : "text-lg flex flex-col items-center leading-5"
        }
      >
        <div>
          CONVIT<span className="text-blue-500">3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
