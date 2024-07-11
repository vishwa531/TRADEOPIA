import { useState, useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"

const Stats = () => {

    const [counterState, setCounterState] = useState(false)

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="mt-[100px] ">

            <div className="text-center mb-[70px] "
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
            >
                <h1 className="text-[80px]">Stats</h1>
            </div>

            <div className="md:px-40"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="2000"
            >
                <ScrollTrigger
                    onEnter={() => setCounterState(true)}
                    onExit={() => setCounterState(false)}
                >

                    <div className="grid grid-cols-1 lg:grid-cols-3 text-center px20">
                        <div className="my-5">
                            <h2 className="text-[90px] font-bold">
                                <span>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={160}
                                            duration={2.00}
                                        ></CountUp>
                                    }K+
                                </span>
                            </h2>
                            <p className="text-[30px]">Users</p>
                        </div>

                        <div className="my-5">
                            <h2 className="text-[90px] font-bold">
                                <span>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={290}
                                            duration={2.00}
                                        ></CountUp>
                                    }Cr+
                                </span>
                            </h2>
                            <p className="text-[30px]">Total Invested</p>
                        </div>

                        <div className="my-5">
                            <h2 className="text-[90px] font-bold">
                                <span>
                                    {counterState &&
                                        <CountUp
                                            start={0}
                                            end={935}
                                            duration={2.00}
                                        ></CountUp>
                                    }+
                                </span>
                            </h2>
                            <p className="text-[30px]">Stocks</p>
                        </div>
                    </div>

                </ScrollTrigger>

            </div>

        </section>
    )
}

export default Stats
