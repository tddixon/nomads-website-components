import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8  items-center justify-center  min-h-screen  w-full">
      <h1 className="text-4xl font-bold">Nomads Website Components</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
        <Card className="hover:bg-accent transition-colors">
          <Link href="/about" className="block">
            <CardHeader>
              <CardTitle>About Us</CardTitle>
              <CardDescription>
                Learn more about our team and mission
              </CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="hover:bg-accent transition-colors">
          <Link href="/services" className="block">
            <CardHeader>
              <CardTitle>Services</CardTitle>
              <CardDescription>Explore our range of services</CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="hover:bg-accent transition-colors">
          <Link href="/portfolio" className="block">
            <CardHeader>
              <CardTitle>Portfolio</CardTitle>
              <CardDescription>View our past work and projects</CardDescription>
            </CardHeader>
          </Link>
        </Card>

        <Card className="hover:bg-accent transition-colors">
          <Link href="/contact" className="block">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>Get in touch with us</CardDescription>
            </CardHeader>
          </Link>
        </Card>
      </div>
    </main>
  );
}
