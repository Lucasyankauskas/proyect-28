import BurgerMenu from '../assets/icon-hamburger.svg'
import { useState } from 'react'


export const NavBar = () => {

    const [menuClicked, setMenuClicked] = useState(false)

    const handleClick = () => {
        setMenuClicked(prevState => !prevState)
    }


  return (
    <nav className='sm:h-[24px]'>
        <ul className={`bg-white py-[39px] w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col items-center place-content-around 
        after:content-[""] after:absolute after:top-[-23px] after:right-0 after:border-[12px] after:border-transparent after:border-b-white after:border-r-white text-Dark-grayish-blue text-xl z-10 ${menuClicked ? 'flex' : 'hidden'} 
        
        sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:relative sm:mt-0 sm:text-White
        
        md:w-[500px] `}>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer bg-Yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-Very-dark-desaturated-blue uppercase sm:bg-White sm:hover:bg-opacity-25 sm:hover:text-White'>Contact</li>
        </ul>
        <div className='cursor-pointer sm:hidden' onClick={handleClick}>
            <img src={BurgerMenu} alt="menu" />
        </div>
    </nav>
  )
}
