import { useEffect } from 'react'
import ButtonY from "./ButtonY"
// import { Spline2 } from "./Animation"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { HeroImage } from '../../public/assets'

const Hero = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6 " >

            <div className="grid place-content-evenly grid-cols-1 md:grid-cols-2 xl:mx-[200px] mx-auto ">

                <div className="py-0 lg:text-left text-center w-full justify-center relative ">

                    <div className="w-auto">
                        <h1 className=" text-[70px] ss:text-[72px] ss:leading-[100px] leading-[75px]"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="2000"
                        >
                            The Next <br /> {" "} <span>Generation</span> {" "}
                            <br /> Trading Platform
                        </h1>
                    </div>

                    <p className="mt-[40px] md:text-[23px] text-xs font-medium opacity-75 leading-[30px]"
                        data-aos="fade-right"
                        data-aos-delay="700"
                        data-aos-duration="2000"
                    >
                        Accurate and Realtime <span className="text-[120%] font-bold">Stock Exchange</span> platform.
                    </p>

                    <div className="flex lg:justify-start lg:items-start justify-center items-center -ml-[20px] ">
                        <div className="w-[270px] mt-[35px] text-[30px] "
                            data-aos="fade-right"
                            data-aos-delay="1200"
                            data-aos-duration="2000"
                        >
                            <a href="/">
                                <ButtonY name="Get started" />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="md:grid place-content-evenly grid-cols-1 h-[550px] w-[756px] md:h-auto md:w-auto md:mx-0  z-40 hidden lg:block ">
                    <img src={HeroImage}
                        alt="Hero Image"
                        className="my-auto"
                        data-aos="fade-left"
                        data-aos-delay="350"
                        data-aos-duration="1500"
                    />
                </div>

            </div>

            {/*<div className="absolute inset-0 z-0"
                data-aos="zoom-in-up"
                data-aos-delay="100"
                data-aos-duration="3000"
            >
                <Spline2 style={{ width: '100%', height: '100%' }} />
            </div>*/}

        </section>
    )
}

export default Hero
