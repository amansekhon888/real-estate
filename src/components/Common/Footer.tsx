import { AccountTreeRounded, CallRounded, CollectionsRounded, ConstructionRounded, EmailRounded, Groups2Rounded, HomeRounded, InfoRounded, LocationOnRounded } from "@mui/icons-material"
import { logo } from "../../assets/images"

const Footer = () => {
    return (
        <div className='bg-primaryAccent w-full'>
            <div className="tablet:w-10/12 w-11/12 m-auto flex gap-[1.6vw] py-[3vw]">
                <div className="w-[50%]">
                    <img className="w-[16vw]" src={logo} alt="Logo" />
                    <p className="mt-[1vw] text-[1.6vw] font-medium"><span className="text-primary">CONSTRUCTO</span> Construction Company</p>
                    <p className="mt-[0.4vw] tracking-wide opacity-80">Every project is a journey, and we’re honored to be part of yours. From concept to completion, we’re committed to delivering spaces that not only meet your expectations but exceed them. Let’s build a future that inspires!</p>
                </div>
                <div className="w-[25%]">
                    <p className="text-[1.2vw]">OUR PAGES</p>
                    <div className="mt-[0.6vw] flex flex-col gap-[0.2vw]">
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><HomeRounded /></span><span className="opacity-80">Home</span></p>
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><InfoRounded /></span><span className="opacity-80">About Us</span></p>
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><CollectionsRounded /></span><span className="opacity-80">Gallary</span></p>
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><ConstructionRounded /></span><span className="opacity-80">Services</span></p>
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><AccountTreeRounded /></span><span className="opacity-80">Projects</span></p>
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><Groups2Rounded /></span><span className="opacity-80">Teams</span></p>
                    </div>
                </div>
                <div className="w-[25%]">
                    <p className="text-[1.2vw]">CONTACT US</p>
                    <div className="mt-[0.6vw] flex flex-col gap-[0.2vw]">
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><EmailRounded /></span><span className="opacity-80">example@gmail.com</span></p>
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><CallRounded /></span><span className="opacity-80">+91 9876543210</span></p>
                        <p className="flex gap-[0.6vw]"><span className="text-para text-primary"><LocationOnRounded /></span><span className="opacity-80">Nalbandan Gali, Hazuri Road, Ludhiana, 141008</span></p>
                    </div>
                </div>
            </div>
            <hr className="border-black opacity-40"/>
            <p className="text-center my-[0.4vw] text-parasm">&copy; Copyright 2024, <span className="text-primary font-bold">CONSTRUCTO</span> Construction Company</p>
        </div>
    )
}

export default Footer