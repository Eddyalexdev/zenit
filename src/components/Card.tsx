import image from '../images/ascensor-1.png'

interface Props {
    title: string,
    image?: string,
    location: string
}

const Card = ({title, location}: Props) => {
    return (
        <div className="border-4 border-white rounded-md relative h-[250px] flex items-end pb-8">
            <img src={image}  alt="" className="absolute w-full h-full object-cover top-0 left-0" />
            <h3 className="text-lg font-bold text-white uppercase p-2 relative bg-black inline">
                {title}
                <span className="bg-blue text-xs text-white p-1 absolute bottom-[-15px] left-0">{location}</span>
            </h3>
        </div>
    )
}

export default Card