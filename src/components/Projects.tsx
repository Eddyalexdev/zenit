import Card from './Card'

const Projects = () => {
    return (
        <section className="bg-blue py-8 pb-20">
            <div className="w-[60%] mx-auto">
                <h2 className="text-white text-4xl mb-6">Nuestros Proyectos</h2>
                <div className="grid grid-cols-4 gap-4">
                    <Card title="Campo Ferial" location="Chuquiago Marka" />
                    <Card title="Campo Ferial" location="Chuquiago Marka" />
                    <Card title="Campo Ferial" location="Chuquiago Marka" />
                    <Card title="Campo Ferial" location="Chuquiago Marka" />
                </div>
            </div>
        </section>
    )
}

export default Projects