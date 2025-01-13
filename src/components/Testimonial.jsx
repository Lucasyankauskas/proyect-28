

export const Testimonial = ({ img, testimonial, name, position }) => {
    return (
      <div className="flex flex-col items-center text-center mb-16">
          <img className="w-[72px] rounded-full" src={img} alt="testimonial" />
          <p className="my-8 font-Barlow text-Very-dark-grayish-blue px-4 max-w-[400px]">{testimonial}</p>
          <h3 className="font-Fraunces text-[18px] text-Very-dark-grayish-blue">{name}</h3>
          <p className="text-Grayish-blue text-[14px] font-Barlow">{position}</p>
      </div>
    )
  }
  
