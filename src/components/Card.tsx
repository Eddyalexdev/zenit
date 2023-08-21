import { useState } from 'react'
import image from '../images/ascensor-1.png'
import {AnimatePresence, motion} from 'framer-motion'
import Modal from './Modal'

interface Props {
    title: string,
    image?: string,
    location: string
}

const Card = ({title, location}: Props) => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <AnimatePresence>
                {
                    modal &&
                    <Modal setState={setModal}/>
                }
            </AnimatePresence>
            <div onClick={() => setModal(true)} className="border-4 border-white rounded-md relative h-[250px] xl:h-[300px] flex items-end pb-8">
                <motion.div whileHover={{opacity: .8}} className='w-full h-full absolute bg-black opacity-0 top-0 left-0 z-10'></motion.div>
                <img src={image}  alt="" className="absolute w-full h-full object-cover top-0 left-0" />
                <h3 className="text-lg font-bold text-white uppercase p-2 relative bg-black inline z-20">
                    {title}
                    <span className="bg-blue text-xs text-white p-1 absolute bottom-[-15px] left-0">{location}</span>
                </h3>
            </div>
        </>
    )
}

export default Card