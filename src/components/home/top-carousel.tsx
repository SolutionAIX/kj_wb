import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import './top-carousel.css'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const data = [
  {
    title: "Innovate AI Audio to Text",
    description: "Try free change Audio to text and summarize",
    image: ""
  },
  {
    title: "Innovate AI Video realtime translate",
    description: "Try free translate your videos in real time",
    image: ""
  },
  {
    title: "Innovate AI Videa Generation",
    description: "Try free generate AI Video for your needs",
    image: ""
  },
]

export function TopCarousel() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  React.useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleDarkModeChange = (e) => setIsDarkMode(e.matches);

    darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

    return () => darkModeMediaQuery.removeEventListener('change', handleDarkModeChange);
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}>
      <CarouselContent className="">
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="">

                <CardContent
                  className="h-[250px] flex items-center p-6 dark:bg-img-dark bg-img"
                  // style={{
                  //   backgroundImage: `url("${isDarkMode ? "/images/content-carousel/dark-image.jpg" : "/images/content-carousel/image2.jpg"}")`,
                  //   backgroundSize: 'cover', // Ensure the image covers the full area
                  //   backgroundPosition: 'center', // Center the background image
                  //   backgroundRepeat: 'no-repeat', // Prevent the image from repeating
                  // }}
                >
                  <span className="text-4xl font-semibold w-72">{item.title}</span>
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
