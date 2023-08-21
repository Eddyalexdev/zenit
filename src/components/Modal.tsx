import {motion} from 'framer-motion'
import { Dispatch, SetStateAction } from 'react'

interface Props {
    title?: string,
    description?: string,
    image?: string,
    setState: Dispatch<SetStateAction<boolean>>
}

const Modal = ({title, description, image, setState}: Props) => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="w-full h-screen grid place-items-center fixed z-40 left-0 top-0"
        >
            <div className='bg-black w-full h-full absolute left-0 top-0 opacity-[.8]'></div>
            <div className="bg-white relative">
                <button onClick={() => setState(false)}>Salir</button>
            </div>
        </motion.div>
    )
}

export default Modal 