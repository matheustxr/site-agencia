

export default function SectionFourHome() {
    return (
        <section className="container mx-auto px-5 md:px-10 xl:px-20 py-20">
            <div className="flex flex-col items-center">
                <h2>
                    Alguns de nossas trabalhos:
                </h2>
                <div className="mx-auto w-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 ">
                    <div className="w-[300px] h-[200px] border-2 rounded-xl " />
                    <div className="w-[300px] h-[200px] border-2 rounded-xl " />
                    <div className="w-[300px] h-[200px] border-2 rounded-xl " />
                    <div className="w-[300px] h-[200px] border-2 rounded-xl " />
                    <div className="w-[300px] h-[200px] border-2 rounded-xl " />
                    <div className="w-[300px] h-[200px] border-2 rounded-xl " />
                </div>
            </div>
        </section>
    )
}