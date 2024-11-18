/* eslint-disable @next/next/no-img-element */
import { CalendarIcon, HomeIcon, MapPinIcon, UserIcon } from "lucide-react"
import Link from "next/link"
import { mockProperties } from "@/lib/mockDB/mockProperties"
import { SearchSection } from "./components/SearchSection"
import { PropertyCard } from "./components/PropertyCard"

export default async function HomePage() {
  const properties = mockProperties; // In a real app, this would be fetched from an API or database

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <HomeIcon className="h-6 w-6" />
          <span className="sr-only">Acme Rentals</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Rentals
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <SearchSection />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Featured Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <UserIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Verified Hosts</h3>
                <p className="text-muted-foreground">All our hosts are carefully vetted to ensure quality stays.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MapPinIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Prime Locations</h3>
                <p className="text-muted-foreground">Find accommodations in the heart of your desired destination.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CalendarIcon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Flexible Bookings</h3>
                <p className="text-muted-foreground">Easy reservation management with free cancellation options.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 Acme Rentals. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}