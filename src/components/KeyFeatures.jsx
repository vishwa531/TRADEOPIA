import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Support24x7, RiskManagment, liveTraining } from '../../public/assets'

const KeyFeatures = () => {

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
        <h1 className="text-[80px]"> Key <span>Features</span></h1>
      </div>

      <div className="mt-[50px] xl:mx-[200px] mx-auto gap-[100px] group mb-[125px]  grid place-content-evenly lg:grid-cols-3 md:grid-cols-1 "
        data-aos="zoom-in-up"
        data-aos-delay="700"
        data-aos-duration="2000"
      >
        <div className="bg-gradient-to-b from-slate-950/50 to-slate-950/20 backdrop-blur-lg shadow-[0_0_20px_10px_rgba(16,14,32,1)] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-[30px] ">
          <img
            src={ Support24x7 }
            alt="RiskManagement"
            className="h-[280px] w-[280px] mx-auto mb-5"
          />
          <h4 className="uppercase text-xl font-bold">24x7 Support</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam
            eius nulla dolore? Dolores sed officia quo vitae doloremque?
            Dolores!
          </p>
        </div>

        <div className="bg-gradient-to-b from-slate-950/50 to-slate-950/20 backdrop-blur-lg shadow-[0_0_20px_10px_rgba(16,14,32,1)] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-[30px]">
          <img
            src={ RiskManagment }
            alt="RiskManagement"
            className="h-[280px] w-[280px] mx-auto mb-5"
          />
          <h4 className="uppercase text-xl font-bold">Risk Managment</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam
            eius nulla dolore? Dolores sed officia quo vitae doloremque?
            Dolores!
          </p>
        </div>

        <div className="bg-gradient-to-b from-slate-950/50 to-slate-950/20 backdrop-blur-lg shadow-[0_0_20px_10px_rgba(16,14,32,1)] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-[30px]">
          <img
            src={ liveTraining }
            alt="RiskManagement"
            className="h-[280px] w-[280px] mx-auto mb-5"
          />
          <h4 className="uppercase text-xl font-bold">Live Training</h4>
          <p className="text-sm leading-7 my-3 font-light opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magnam
            eius nulla dolore? Dolores sed officia quo vitae doloremque?
            Dolores!
          </p>
        </div>
      </div>

    </section>
  )
}

export default KeyFeatures
