import { living_room2 } from "../../assets/images"
import Button from "../Common/Button"
import Heading from "../Common/Heading"

const HomeWork = () => {
    return (
        <div className="tablet:w-10/12 w-11/12 max-h-[85vh] m-auto flex gap-[1.2vw]">
            <div className="w-2/5">
                <Heading text="See Our Best Work Come to Life" custom_css="text-start" />
                <p className="mt-[1.6vw]">Discover a collection of our most remarkable projects that reflect our dedication to quality, innovation, and craftsmanship. From luxurious residences to state-of-the-art commercial spaces, each project tells a story of vision turned into reality. Explore how we bring ideas to life with precision and passion, creating spaces that inspire and endure.</p>
                <Button text="View Our Portfolio" />
            </div>
            <div className="flex-1">
                {/* Crousal for Work Images */}
                <img className="h-[80vh] w-full object-cover rounded-[1.6vw]" src={living_room2} />
            </div>
        </div>
    )
}

export default HomeWork