"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { MapIcon, SearchIcon, CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { useState } from "react";
import SearchResults from "./components/Results";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function SearchResultsPage() {
  const router = useRouter();
  const locationQuery = useSearchParams().get("location");
  const [searchTerm, setSearchTerm] = useState(locationQuery || "");
  const [mapView, setMapView] = useState(false);
  const [searchParams, setSearchParams] = useState({
    location: locationQuery || "",
    checkIn: undefined,
    checkOut: undefined,
    guests: 1,
  });

  const params = new URLSearchParams(searchParams.toString());

  const [isLoading, setIsLoading] = useState(true);

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSearchParamChange = (
    param: string,
    value: string | number | Date | undefined
  ) => {
    setSearchParams((prev) => ({ ...prev, [param]: value }));
  };

  const handleSubmitSearch = () => {
    setSearchTerm(searchParams.location);
    params.set("location", searchParams.location);
    if (searchParams.location) {
      window.history.pushState({}, "", `?location=${searchParams.location}`);
    } else {
      window.history.pushState({}, "", "/search");
    }

    // After API call, you would update the search results state
    setDialogOpen(false);
  };

  const handleClearSearch = () => {
    setSearchParams({
      location: "",
      checkIn: undefined,
      checkOut: undefined,
      guests: 1,
    });
    window.history.pushState({}, "", "/search");
  };

  return (
    <div className="min-h-screen bg-background relative">
      {isLoading && (
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <Loader2
              className="h-8 w-8 animate-spin mx-auto"
              id="searching-icon"
            />
            <p className="mt-2 text-sm text-muted-foreground">Searching...</p>
          </div>
        </div>
      )}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold" id="search-title">
            Search Results
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setMapView(!mapView)}>
              <MapIcon className="mr-2 h-4 w-4" />
              {mapView ? "List View" : "Map View"}
            </Button>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button id="modify-search-button">
                  <SearchIcon className="mr-2 h-4 w-4" />
                  Modify Search
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Modify Search</DialogTitle>
                  <DialogDescription>
                    Adjust your search parameters here. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="location" className="text-right">
                      Location
                    </Label>
                    <Input
                      id="location-input"
                      value={searchParams.location}
                      onChange={(e) =>
                        handleSearchParamChange("location", e.target.value)
                      }
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="check-in" className="text-right">
                      Check-in
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="check-in"
                          variant={"outline"}
                          className={`col-span-3 justify-start text-left font-normal ${
                            !searchParams.checkIn && "text-muted-foreground"
                          }`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {searchParams.checkIn
                            ? format(searchParams.checkIn, "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={searchParams.checkIn}
                          onSelect={(date) =>
                            handleSearchParamChange("checkIn", date)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="check-out" className="text-right">
                      Check-out
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="check-out"
                          variant={"outline"}
                          className={`col-span-3 justify-start text-left font-normal ${
                            !searchParams.checkOut && "text-muted-foreground"
                          }`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {searchParams.checkOut
                            ? format(searchParams.checkOut, "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={searchParams.checkOut}
                          onSelect={(date) =>
                            handleSearchParamChange("checkOut", date)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="guests" className="text-right">
                      Guests
                    </Label>
                    <Select
                      value={searchParams.guests.toString()}
                      onValueChange={(value) =>
                        handleSearchParamChange("guests", parseInt(value))
                      }
                    >
                      <SelectTrigger id="guests" className="col-span-3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "guest" : "guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    id="clear"
                    variant="outline"
                    onClick={handleClearSearch}
                  >
                    Clear
                  </Button>
                  <Button
                    type="submit"
                    id="save-changes-button"
                    onClick={handleSubmitSearch}
                  >
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="price-range">
                    Price Range
                  </label>
                  <Slider
                    id="price-range"
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    className="mt-2"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">$0</span>
                    <span className="text-sm">$1000+</span>
                  </div>
                </div>
                <div>
                  <label
                    className="text-sm font-medium"
                    htmlFor="property-type"
                  >
                    Property Type
                  </label>
                  <Select>
                    <SelectTrigger id="property-type" className="mt-2">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="cabin">Cabin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium" htmlFor="instant-book">
                    Instant Book
                  </label>
                  <Switch id="instant-book" />
                </div>
                <div>
                  <label className="text-sm font-medium" htmlFor="amenities">
                    Amenities
                  </label>
                  <div className="space-y-2 mt-2">
                    {[
                      "Wi-Fi",
                      "Kitchen",
                      "Air Conditioning",
                      "Washer",
                      "Free Parking",
                    ].map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <input type="checkbox" id={amenity} className="mr-2" />
                        <label htmlFor={amenity} className="text-sm">
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Apply Filters</Button>
              </CardFooter>
            </Card>
          </aside>

          <section className="w-full md:w-3/4">
            {mapView ? (
              <div className="bg-muted w-full h-[600px] rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Map View (Integration required)
                </p>
              </div>
            ) : (
              <SearchResults
                searchTerm={searchTerm}
                setIsLoading={setIsLoading}
              />
            )}

            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </div>
      </main>
    </div>
  );
}
