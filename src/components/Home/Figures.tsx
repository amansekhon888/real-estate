import { background_pattern, living_room2 } from "../../assets/images"

const Figures = () => {
  return (
    <div className="h-[60vw] max-h-[85vh] relative text-white">
        <div className="h-[50vw] max-h-[75vh] w-full bg-[#414141] absolute bottom-0 z-[-1]">
            <img className="h-full w-full object-cover opacity-10" src={background_pattern} />
        </div>
        <div className="tablet:w-10/12 w-11/12 h-full mx-auto flex gap-[1.2vw] flex items-end">
            <div className="w-4/12 h-[50vw] max-h-[75vh] flex flex-col py-[1.2vw]">
                <p className="w-3/5 flex-1 flex flex-col justify-center"><span className="text-heading">10+</span><span className="text-[1.2vw]">YEARS OF EXPERIENCE</span><span className="text-para">Crafting spaces that inspire and endure.</span></p>
                <p className="w-3/5 flex-1 flex flex-col justify-center self-end "><span className="text-heading">50+</span><span className="text-[1.2vw]">SKILLED PROFESSIONALS</span><span className="text-para">A team of experts driving innovation and delivering quality.</span></p>
                <p className="w-3/5 flex-1 flex flex-col justify-center"><span className="text-heading">4K+</span><span className="text-[1.2vw]">PROJECTS COMPLETED</span><span className="text-para">Bringing visions to life with precision and expertise.</span></p>
            </div>
            <img className="w-4/12 h-full object-cover rounded-t-full ring ring-offset-4 ring-primary" src={living_room2} />
            <div className="w-4/12 h-[50vw] max-h-[75vh] flex flex-col py-[1.2vw]">
                <p className="w-3/5 flex-1 flex flex-col justify-center"><span className="text-heading">2K+</span><span className="text-[1.2vw]">HAPPY CLIENTS</span><span className="text-para">Building lasting relationships through quality and trust.</span></p>
                <p className="w-3/5 flex-1 flex flex-col justify-center self-end "><span className="text-heading">20+</span><span className="text-[1.2vw]">AWARDS & RECOGNITION</span><span className="text-para">Celebrating excellence and innovation in construction.</span></p>
                <p className="w-3/5 flex-1 flex flex-col justify-center"><span className="text-heading">10+</span><span className="text-[1.2vw]">COUNTRIES ACROSS GLOBE</span><span className="text-para">Crafting Beautiful Homes Around the World</span></p>
            </div>
        </div>
    </div>
  )
}

export default Figures