


export const Text = ({order, title, text, color}) => {
  return (
    <div className={` ${order} text-center h-[437px] flex flex-col place-content-around py-6 px-6 tablet:h-auto lg:px-[65px] desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr-[105px]`}>
        <h2 className="font-Fraunces text-[2rem] font-black tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight">{title}</h2>
        <p className="font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem] tablet:text-[0.8rem] tablet:leading-[1.5rem] lg:text-[18px]">{text}</p>
        <div className="relative">
        <button className="uppercase font-Fraunces lg:text-1xl ">Learn More</button>
        <div className={`${color} h-[10px] w-[137px] rounded-full absolute mx-auto right-0 left-0 bottom-0 -z-10 bg-opacity-25 desktop:mx-0 desktop:left-[-10px] `}></div>
        </div>
    </div>
  )
}
