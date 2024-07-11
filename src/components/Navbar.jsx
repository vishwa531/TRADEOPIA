import { useState } from 'react'
import ButtonY from './ButtonY.jsx'
import { close, menu } from '../../public/assets'
import { navLinks } from '../constants/index.js'
import { tradeopialogo } from '../../public/assets'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className="w-full flex px-16 py-4 justify-between items-center navbar ">
            <div>
                <span className="text-[70px]"><img src={tradeopialogo} alt="" /></span>
            </div>

            <ul className="list-none md:flex hidden justify-end items-center flex-1">
                {navLinks.map((nav) => (
                    <li key={nav.id} className={`font-poppins cursor-pointer text-[20px] mr-10`} >
                        <a href={`#${nav.id}`} className="aX" > {nav.title} </a>
                    </li>
                ))}

            </ul>

            <div className="w-[200px] text-[25px] hidden md:block">
                <a href="/">
                    <ButtonY name="Log In" />
                </a>
            </div>

            {/* -----------------------------------smartphone view-------------------------------------- */}
            <div className="md:hidden flex flex-1 justify-end items-center z-50">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1 sticky">
                        {navLinks.map((nav) => (
                            <li key={nav.id} className={`font-poppins cursor-pointer text-[16px] mb-4`} >
                                <a href={`#${nav.id}`} className="hover:underline-offset-8 hover:underline"> {nav.title} </a>
                            </li>
                        ))}

                        <div className="w-[200px] text-[25px]">
                            <a href="/">
                                <ButtonY name="Log In" />
                            </a>
                        </div>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
