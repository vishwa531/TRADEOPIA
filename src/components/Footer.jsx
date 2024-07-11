import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { tradeopialogo } from '../../public/assets'

const Footer = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <footer className="grid md:grid-cols-2 grid-col-1 mt-[150px] px-6 py-8 bg-gradient-to-t from-violet-950 to-transparent text-white ftGraphics">

                <div className="flex flex-col m-5 p-8">
                    <h1 className="text-[50px]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                    >
                        <span><img src={tradeopialogo} alt="" /></span>
                    </h1><br />

                    <p className="text-base"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="2000"
                    >
                        Trusted Trading Partner Since [1997]
                    </p><br />

                    <p data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="2000"
                    >
                        KGI is a leading international tradiong company specializing in accurate trade tips only for learning purpose.
                    </p><br />

                    <p className="text-sm"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="2000"
                    >
                        Copyright &copy; {new Date().getFullYear()} KGI | All Rights Reserved
                    </p>
                    <p className="mb-5"
                        data-aos="fade-up"
                        data-aos-delay="500"
                        data-aos-duration="2000"
                    >
                        Tearms & Conditions
                    </p>
                </div>

                <div className="grid sm:grid-cols-4 grid-cols-1 content-center md:text-left text-center">

                    <div className="w-full lg:w-auto mb-4 lg:mb-0">
                        <h3 className="text-xl font-semibold"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="2000"
                        >
                            Services
                        </h3><br />
                        <ul className="list-none space-y-2">
                            <li
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Trading Tips
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Zero Brockrege
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Live Data Feeds
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Portfolio Management
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="700"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    24*7 Support
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-auto">
                        <h3 className="text-xl font-semibold"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="2000"
                        >
                            Platform
                        </h3><br />
                        <ul className="list-none space-y-2">
                            <li
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Learn More
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-auto">
                        <h3 className="text-xl font-semibold"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="2000"
                        >
                            Community
                        </h3><br />
                        <ul className="list-none space-y-2">
                            <li
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Instagram
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Twitter
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="700"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Telegram
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="800"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-auto">
                        <h3 className="text-xl font-semibold"
                            data-aos="fade-up"
                            data-aos-delay="500"
                            data-aos-duration="2000"
                        >
                            Learn
                        </h3><br />
                        <ul className="list-none space-y-2">
                            <li
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    FAQs
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="700"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Blog
                                </a>
                            </li>
                            <li
                                data-aos="fade-up"
                                data-aos-delay="800"
                                data-aos-duration="2000"
                            >
                                <a href="#" className="text-base hover:underline">
                                    Contact Support
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer
