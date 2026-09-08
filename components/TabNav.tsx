import Link from "next/link";

export default function TabNav({ active }: { active: "home" | "farewell" }) {
  return (
    <nav className="tabs">
      <Link href="/" className={active === "home" ? "tab active-home" : "tab"}>
        💕 She&apos;s Coming Home
      </Link>
      <Link href="/farewell" className={active === "farewell" ? "tab active-farewell" : "tab"}>
        🌙 She Leaves Again
      </Link>
    </nav>
  );
}
