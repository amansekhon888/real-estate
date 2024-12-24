import { Star } from "@mui/icons-material"
import { client1 } from "../../assets/images"

const Testimonials = () => {
    return (
        <div className="w-full h-[70vh] flex relative">
            <div className="w-full h-[50vh] bg-primaryAccent absolute top-[50%] left-0 transform -translate-y-1/2 z-[-1]"></div>
            <div className="tablet:w-10/12 w-11/12 m-auto flex gap-[3vw] h-full">
                <img className="h-full w-1/3 object-cover shadow-md object-top rounded-[1.6vw]" src={client1} alt="Client Image" />
                <div className="w-2/3 flex flex-col justify-center text-center">
                    <p className="uppercase text-[1.8vw]">Sarah Johnson</p>
                    
                    <p className="mt-4">"I couldn’t be happier with the results of my home interior design project. From the initial consultation to the final reveal, the team showed exceptional creativity and professionalism. They turned my outdated living room into a stunning, cozy space that feels like it was pulled straight from a magazine. Their attention to detail and ability to incorporate my preferences into the design were truly impressive. Highly recommend to anyone looking to elevate their space!"</p>
                </div>
                <div className="bg-white absolute w-1/5 top-[6vw] left-[28vw] px-[1vw] py-[0.8vw] rounded-[1.6vw] shadow-md">
                    <p className="text-[1.2vw] font-bolder">HOUSE INTERIOR DESIGN</p>
                    <div className="flex mt-[0.2vw]">
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                        <Star className="text-yellow-500" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials