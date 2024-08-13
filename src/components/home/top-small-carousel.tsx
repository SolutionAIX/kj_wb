import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const data = [
    {
        title: "Innovate AI Audio to Text",
        description: "Try free change Audio to text and summarize",
        color: "bg-sky-600 aspect-square"
    },
    {
        title: "Innovate AI Video realtime translate",
        description: "Try free translate your videos in real time",
        color: "bg-blue-600 aspect-square"
    },
    {
        title: "Innovate AI Videa Generation",
        description: "Try free generate AI Video for your needs",
        color: "bg-indigo-600 aspect-square"
    },
]

export function TopSmallCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}>
            <CarouselContent>
                {data.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="">
                                <CardContent className={`h-[250px] flex items-center justify-center p-6`}>
                                        <span className="text-4xl font-semibold ">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
    )
}
