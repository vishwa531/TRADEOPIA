import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { instagram, twitter, telegram, facebook } from '../../public/assets'

const JoinCommunity = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section>

            <h2 className="text-[80px] text-center mt-[130px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
            >
                Join our <span>Fast-</span> <br /> <span>Growing</span> Community
            </h2>

            <div className="md:mx-[150px] mx-auto my-16 grid place-content-evenly gap-10 lg:grid-cols-2 md:grid-cols-1">

                <a href="https://www.instagram.com/">
                    <div className="max-w-md mx-auto bg-slate-950 rounded-xl shadow-md overflow-hidden md:max-w-2xl"
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                    >
                        <div className="md:flex">
                            <div className="md:shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src={ instagram } alt="Modern building architecture" />
                            </div>
                            <div className="p-8">
                                <div className="tracking-wide text-[20px] text-sky-200 font-semibold">Instagram</div>
                                <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sit, itaque consectetur molestiae quasi voluptas nostrum sunt aspernatur aliquam.</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://twitter.com/?lang=en">
                    <div className="max-w-md mx-auto bg-slate-950 rounded-xl shadow-md overflow-hidden md:max-w-2xl"
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="1500"
                    >
                        <div className="md:flex">
                            <div className="md:shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src={ twitter } alt="Modern building architecture" />
                            </div>
                            <div className="p-8">
                                <div className="tracking-wide text-[20px] text-sky-200 font-semibold">Twitter</div>
                                <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sit, itaque consectetur molestiae quasi voluptas nostrum sunt aspernatur aliquam.</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://telegram.org/">
                    <div className="max-w-md mx-auto bg-slate-950 rounded-xl shadow-md overflow-hidden md:max-w-2xl"
                        data-aos="fade-right"
                        data-aos-delay="500"
                        data-aos-duration="3000"
                    >
                        <div className="md:flex">
                            <div className="md:shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src={ telegram } alt="Modern building architecture" />
                            </div>
                            <div className="p-8">
                                <div className="tracking-wide text-[20px] text-sky-200 font-semibold">Telegram</div>
                                <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sit, itaque consectetur molestiae quasi voluptas nostrum sunt aspernatur aliquam.</p>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="https://www.facebook.com/">
                    <div className="max-w-md mx-auto bg-slate-950 rounded-xl shadow-md overflow-hidden md:max-w-2xl"
                        data-aos="fade-left"
                        data-aos-delay="500"
                        data-aos-duration="3000"
                    >
                        <div className="md:flex">
                            <div className="md:shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src={ facebook } alt="Modern building architecture" />
                            </div>
                            <div className="p-8">
                                <div className="tracking-wide text-[20px] text-sky-200 font-semibold">Facebook</div>
                                <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui consequatur sit, itaque consectetur molestiae quasi voluptas nostrum sunt aspernatur aliquam.</p>
                            </div>
                        </div>
                    </div>
                </a>

            </div>

        </section>
    )
}

export default JoinCommunity
