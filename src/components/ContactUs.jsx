import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { contactUsO_img } from '../../public/assets'

const ContactUs = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section>

            <div className="text-center mt-[130px] mb-[60px]"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="2000"
            >
                <h1 className="text-[80px]">Contact Us</h1>
            </div>

            <form action="" method="post"
                data-aos="zoom-in"
                data-aos-delay="500"
                data-aos-duration="3000"
            >
                <div className="mx-auto bg-gradient-to-b from-slate-950/50 to-slate-950/20 backdrop-blur-lg shadow-[0_0_20px_10px_rgba(16,14,32,1)] p-[20px] grid md:grid-cols-2 grid-col-1 gap-5 rounded-[30px] h-auto lg:mx-[200px] ">
                    <div className="p-[40px] rounded-[17px]">
                        <div>
                            <div className="text-3xl mb-[10px]">Let{"'"} Connect</div>
                            <div className="w-96 opacity-80 text-white text-base font-normal">Let{"'"}s align our constellations! Reach out and let the magic of collaboration illuminate our skies.</div>
                        </div>

                        <div className="mt-10">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="self-stretch border-[1px] rounded-[25px] p-3 bg-purple-950/20"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="self-stretch border-[1px] rounded-[25px] p-3 bg-purple-950/20"
                                />
                            </div>

                            <div className="bg-purple-950/20 w-auto mt-[14px] rounded-[25px]">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="self-stretch bg-transparent border-[1px] rounded-[25px] p-3 w-full"
                                />
                            </div>

                            <div className="bg-purple-950/20 w-auto mt-[14px] rounded-[25px]">
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="self-stretch bg-transparent border-[1px] rounded-[25px] p-3 w-full"
                                />
                            </div>

                            <div className="bg-purple-950/20 w-auto mt-[14px] rounded-[25px]">
                                <textarea
                                    type="text"
                                    placeholder="Subject"
                                    className="self-stretch bg-transparent border-[1px] rounded-[25px] p-3 w-full h-[109px]"
                                />
                            </div>

                            <div className="mt-[14px] py-3 ">
                                <button
                                    type="submit"
                                    className="self-stretch rounded-[25px] p-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="m-auto relative h-[600px] max-w-[580px] lg:auto rounded-[17px] place-content-evenly md:block hidden overflow-hidden border-2">
                        <img
                            src={ contactUsO_img }
                            alt="Thoughts"
                            className="rounded-[17px] object-cover"
                        />
                        <div className="textOverlay w-[90%] mt-[0px] flex justify-center items-center">
                            <p className="bg-transparent text-center">
                                {"“"}Two lunar months revealed Earth is fragile beauty against vast silence, transforming my view of our place in the universe.{"”"}<br />{"- "}Irinel Traista
                            </p>
                        </div>
                    </div>
                </div>
            </form>

        </section>
    )
}

export default ContactUs
