import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import ButtonY from "./ButtonY"
import { card } from '../../public/assets'

const AboutKGI = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section>

            <div className="text-center mt-[130px] mb-[100px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
            >
                <h1 className="text-[80px]">About <span>TRADEOPIA</span></h1>
            </div>

            <div>
                <div className="left-0 md:text-right text-center lg:mx-[200px] mx-auto mb-[50px]">
                    <p className="text-[36px]"
                        data-aos="fade-lert"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                    >
                        Unveiling a World of Opportunity
                    </p>
                    <p className="text-[20px]"
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                    >
                        you{"'"}ll discover the inner workings of our dynamic trading company. We{"'"}ll guide you through...
                    </p>
                </div>

                <div className="flex lg:mx-[200px] lg:justify-end lg:items-end justify-center items-center "
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="3000"
                >
                    <div className="w-[270px] mt-[35px] text-[30px] ">
                        <a href="/">
                            <ButtonY name="Learn More" />
                        </a>
                    </div>
                </div>

                <div className="flex lg:mx-[200px] mx-auto ">
                    <div className="flex flex-auto lg:w-[157%] lg:h-[530px] w-auto h-auto "
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="3000"
                    >
                        <img src={ card } alt="Tablet" />
                    </div>

                    <div className="w-[43%] flex justify-center items-center">
                        <div className="text-center">
                            <h3
                                data-aos="fade-left"
                                data-aos-delay="300"
                                data-aos-duration="2000"
                            >
                                <span>Our Expertise</span>
                            </h3><br />
                            <h3
                                data-aos="fade-left"
                                data-aos-delay="500"
                                data-aos-duration="2000"
                            >
                                <span>Global Reach</span></h3>
                            <br />
                            <h3
                                data-aos="fade-left"
                                data-aos-delay="700"
                                data-aos-duration="2000"
                            >
                                <span>Seamless Operation</span>
                            </h3><br />
                            <h3
                                data-aos="fade-left"
                                data-aos-delay="900"
                                data-aos-duration="2000"
                            >
                                <span>Gain insights into our strategic sourcing</span>
                            </h3><br />
                            <h3
                                data-aos="fade-left"
                                data-aos-delay="1100"
                                data-aos-duration="2000"
                            >
                                <span>Commitment to Partnership</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutKGI
