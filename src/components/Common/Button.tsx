
const Button = ({ text, action, custom_css }: {text: string, action?: any, custom_css?: any}) => {
    return (
        <div className={`tablet:mt-[2.2vw] mt-[4vw] flex ${custom_css}`} onClick={() => action}>
            <p className='text-white text-para uppercase font-semibold tablet:px-[1.2vw] tablet:py-[0.6vw] px-[3vw] py-[1.6vw] bg-primary rounded-[0.6vw]'>{text}</p>
        </div>
    )
}

export default Button