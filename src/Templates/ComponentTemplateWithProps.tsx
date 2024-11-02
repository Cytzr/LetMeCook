//insert props if needed
interface ComponentTemplateProps {
    //prop name: datatype
    Example: string
}

const ComponentTemplateWithProps: React.FC<ComponentTemplateProps> = ({ Example }) => {
    return (
        <>
            <div>{Example}</div>
        </>
    )
}

export default ComponentTemplateWithProps;