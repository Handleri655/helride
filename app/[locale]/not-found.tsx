import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-display text-xl uppercase tracking-[0.16em] text-signal">404</p>
      <h1 className="mt-3 font-display text-6xl uppercase leading-none md:text-8xl">
        Sivua ei löydy
      </h1>
      <p className="mt-4 text-lg text-mist">Page not found.</p>
      <p className="mt-8 flex gap-6 font-display text-2xl uppercase">
        <Link href="/fi" className="underline decoration-signal underline-offset-4">
          Etusivu
        </Link>
        <Link href="/en" className="underline decoration-signal underline-offset-4">
          Home
        </Link>
      </p>
    </Container>
  );
}
