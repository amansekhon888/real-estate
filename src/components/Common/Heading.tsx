

const Heading = ({ text, custom_css = 'text-end' }: { text: string, custom_css?: string }) => {
    const [firstWord, ...remainingWords] = text.split(' ');
    const remainingText = remainingWords.join(' ');

    return (
        <div className={`text-heading leading-tight ${custom_css}`}>
            <span className="text-primary">{firstWord}</span>
            <span className=""> {remainingText}</span>
        </div>
    )
}

export default Heading