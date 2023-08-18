import slide1 from '../images/slide-1.png'
import slide2 from '../images/slide-2.png'
import border from '../images/title-border.png'
import {motion} from 'framer-motion'

const Hero = () => {
    return (
        <section className="h-[800px] w-full relative">
            <div className="flex flex-col gap-2 items-center w-full justify-center h-full absolute">
                <img src={slide1} alt="" className="absolute h-full left-0 top-0 w-full brightness-[.75] object-cover" />
                <div className="uppercase text-white flex items-center gap-2 relative">
                    <motion.img initial={{opacity: 0}} animate={{opacity: 1}} src={border} alt=""/>
                    Necesitando
                    <motion.img initial={{opacity: 0}} animate={{opacity: 1}} src={border} alt=""/>
                </div>
                <h2 className="text-6xl text-white font-bold relative">Ascensores?</h2>
                <span className="text-white relative">Conoce nuestras opciones y tecnologia</span>
                <button>Eleva tus proyectos</button>
            </div>
        </section>
    )
}

export default Hero