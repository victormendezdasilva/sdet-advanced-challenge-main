/* eslint-disable @next/next/no-img-element */
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Property } from "@/types/Property.type";
import { StarIcon } from "lucide-react";

export const PropertyCard = ({ title, location, image }: Property) => (
    <Card>
        <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{location}</CardDescription>
        </CardHeader>
        <CardContent>
            <img
                alt="Cozy Mountain Cabin"
                className="w-full h-48 object-cover"
                height="200"
                src={image}
                style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                }}
                width="300"
            />
        </CardContent>
        <CardFooter className="flex justify-between">
            <div className="flex items-center">
                <StarIcon className="h-5 w-5 fill-primary text-primary" />
                <span className="ml-2 text-sm">4.9 (128 reviews)</span>
            </div>
            <span className="text-sm font-bold">$150/night</span>
        </CardFooter>
    </Card>
)
