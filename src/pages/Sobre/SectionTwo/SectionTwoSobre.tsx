

export default function SectionTwoSobre (){
    return (
        <section className="container mx-auto px-5 md:px-10 xl:px-20 py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full">
                    <img src="" alt="lottie animado" />
                </div>
            
                <div className="w-full flex flex-col gap-5 xl:gap-7">
                    <div>
                        <span>mini titulo</span>
                        <h2>titulo principal</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta delectus possimus alias totam doloribus! Molestias exercitationem, 
                            amet quasi facere alias ratione, quod eos nostrum saepe fugit iusto nam! Placeat, nisi!
                        </p>
                    </div>
                    
                    <ul className="grid grid-cols-1 lg:grid-cols-2">
                        <li className="flex gap-3">
                            <img src="" alt="icon" />
                            <p>
                                texto missão aqui 
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <img src="" alt="icon" />
                            <p>
                                texto visão aqui 
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <img src="" alt="icon" />
                            <p>
                                texto valores aqui 
                            </p>
                        </li>

                        <li className="flex gap-3">
                            <img src="" alt="icon" />
                            <p>
                                texto aqui 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}