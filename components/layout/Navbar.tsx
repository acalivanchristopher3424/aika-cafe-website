"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NavigationLink from "@/components/ui/NavigationLink";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-cream bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-28 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="transition hover:opacity-80">
          <Image
            src="/images/branding/grounded-logo-3.webp"
            alt="Grounded Cafe & Pub"
            width={240}
            height={120}
            priority
            className="object-contain"
          />
        </Link>

        <div className="flex items-center gap-10 text-sm font-medium uppercase tracking-wider">
          <div
            className={
              pathname === "/"
                ? "border-b-2 border-coffee pb-1"
                : ""
            }
          >
            <NavigationLink href="/">Home</NavigationLink>
          </div>

          <div
            className={
              pathname === "/menu"
                ? "border-b-2 border-coffee pb-1"
                : ""
            }
          >
            <NavigationLink href="/menu">Menu</NavigationLink>
          </div>

          <div
            className={
              pathname === "/events"
                ? "border-b-2 border-coffee pb-1"
                : ""
            }
          >
            <NavigationLink href="/events">Events</NavigationLink>
          </div>

          <div
            className={
              pathname === "/whats-new"
                ? "border-b-2 border-coffee pb-1"
                : ""
            }
          >
            <NavigationLink href="/whats-new">
              What's New
            </NavigationLink>
          </div>
        </div>
      </nav>
    </header>
  );
}