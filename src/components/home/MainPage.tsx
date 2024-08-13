
import { TopCarousel } from "./top-carousel"
import { TopSmallCarousel } from "./top-small-carousel"
import { Content } from "./Content"
import { HomeCard } from "./HomeCard"


export function MainPage() {
    return (
        <>
            <div >
                
                <div className="container mx-auto" style={{
                    // backgroundImage: "url(" + "/images/background_layer.png" + ")", backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-2"><TopCarousel /></div>
                        <div className=""><TopSmallCarousel /></div>
                    </div> */}
                    <Content />
                </div>
                <div className="md:container pl-2 pr-2 mx-auto mt-12">
                    {/* <div className="mb-24">

                    </div> */}
                    {/* <CountDownContent/> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* <div className=""><HomeCard /></div> */}
                        <div className="md:col-span-2"></div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}
