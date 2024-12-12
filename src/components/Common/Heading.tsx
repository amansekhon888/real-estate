

const Heading = ({ text }: { text: string }) => {
    const [firstWord, ...remainingWords] = text.split(' ');
    const remainingText = remainingWords.join(' ');

    return (
        <div className='text-[4vw] text-end'>
            <span className="text-primary">{firstWord}</span>
            <span className=""> {remainingText}</span>
        </div>
    )
}

export default Heading