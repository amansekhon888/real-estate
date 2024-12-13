import { sitting_area1 } from "../../assets/images"
import Heading from "../Common/Heading.tsx"

const HomeServices = () => {
  return (
    <div className="tablet:w-10/12 w-11/12 m-auto flex relative">
        <div className="absolute w-2/5 bottom-[4vw] left-[28vw] px-[1.4vw] py-[1.4vw] rounded-[1.6vw] bg-primaryAccent">
          <p className="text-subheading">INTERIOR DESIGN</p>
          <p className="mt-[0.6vw]">Revitalizing old spaces with cutting-edge solutions and impeccable finishes.</p>
        </div>
        <img className="w-2/5 max-h-[85vh] object-cover rounded-[1.6vw]" src={sitting_area1} />
        <div className="flex flex-col items-end">
            <Heading text="Transforming Spaces, Building Dreams"/>
            <p className="w-11/12 text-end mt-[2vw]">We specialize in transforming ordinary properties into extraordinary spaces that not only captivate and inspire guests but also drive exceptional value and maximize returns for property owners. Our expertise lies in blending cutting-edge design, meticulous attention to detail, and innovative property management strategies. With a relentless commitment to quality and a passion for excellence, we collaborate with you to bring your unique vision to life, creating spaces that are both visually stunning and highly functional. Let us help you unlock your property’s full potential and set a new standard of success.</p>
        </div>
    </div>
  )
}

export default HomeServices