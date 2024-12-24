import { kitchen8 } from "../../assets/images"
import ContactForm from "../Forms/Contact.form"

const Contact = () => {
    return (
        <div className="relative mb-[4vw]">
            <div className="tablet:w-10/12 w-11/12 h-[70vh] m-auto relative z-[1] pointer-events-none">
                <img className="absolute top-[4vw] left-0 rounded-[1.6vw] w-1/2 h-full object-cover" src={kitchen8} alt="Contact Form Image" />
            </div>
            <div className="absolute top-0 right-0 w-3/5 h-[70vh] z-[0]">
                <div className="flex items-center ps-[20%] pe-[16%] h-full bg-secondaryBackground py-[1.4vw] rounded-s-[1.6vw] border border-gray41 ring ring-offset-4 ring-primary">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact