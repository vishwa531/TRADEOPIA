import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {

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
                <h1 className="text-[80px]">Services</h1>
            </div>

        </section>
    )
}

export default Services
