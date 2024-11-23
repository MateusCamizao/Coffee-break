import "./Content.css"
import MenuCoffee from "./MenuCoffee";

function Content() {
    return(
        <div>
            <section id="home" class="primary-bg section">
                <div class="main page-content">
                    <div class="main-primary-content">
                        <h1 class="text-content">Coffee Break</h1>
                        <h2 class="text-content"> Sua Pausa, Nossa Experiência </h2>
                           <div>
                                <p>
                                No Coffee Break, acreditamos que cada pausa para o café é uma oportunidade para criar momentos inesquecíveis. 
                                Nosso site foi feito para os amantes de café que buscam mais do que uma simples bebida. 
                                Aqui, você encontra uma seleção dos melhores cafés, acompanhamentos perfeitos e dicas para transformar sua pausa em uma verdadeira experiência sensorial.
                                </p>
                                <p>
                                Seja para recarregar as energias ou para saborear aquele café especial, o Coffee Break é o lugar onde você pode se desconectar do ritmo acelerado do dia e se conectar com o prazer de um café de qualidade. 
                                Experimente novas sensações, explore blends exclusivos e descubra receitas que tornam cada gole único.
                                Aproveite sua pausa com a gente e faça do seu Coffee Break um momento inesquecível!
                                </p>
                           </div>
                    </div>
                </div>
                
            </section>

            <section id="about" class="second-bg section">
                <div class="main">
                    <div class="main-second-content">
                        <h1 class="text-content">OS GRÃOS</h1>
                        <h2 class="text-content">CAFÉS ESPECIAIS COM NOTA SUPERIOR A 80</h2>

                        <div>
                            <h3>
                            Todos os nossos produtos são feitos com café 100% arábica de fazendas parceiras. 
                            Nossos fornecedores de grãos de cafés finos são selecionados pela tradição na cafeicultura de alta qualidade e amor à natureza.
                            </h3>

                            <h3>
                            Assim como o vinho, o café também pode ser apreciado por suas características sensoriais e não apenas pela cafeína. 
                            E pode acreditar, quando você experimentar um café especial, não vai mais querer o café tradicional.
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="content" class="third-bg section">
                <MenuCoffee/>
            </section>
        </div>
    );
}

export default Content;