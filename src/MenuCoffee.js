import "./MenuCoffee.css"
import coffeeOpt1 from "./img/coffee-1.png";
import coffeeOpt2 from "./img/coffee-2.png";
import coffeeOpt3 from "./img/coffee-3.png";
import coffeeOpt4 from "./img/coffee-4.png";

function MenuCoffee(){
    const ItemMenu = (props) => {
        return(
            <div>
                <h2>{props.title}</h2>
                <p>{props.subTitle}</p>
                <div class="coffee-opt-1">
                    <img src={props.optimg} alt=""/>
                    <h5>{props.description}</h5>
                </div>
            </div>
        );
    }

    return(
        <div class="menu-coffee">
            <div class="menu-coffee-content">
                <h1>Cardápio Café Especial</h1>
                <h2>Coffee Break</h2>
                <h5>
                    No Coffee Break, cada xícara é uma celebração do sabor. Oferecemos cafés 100% arábica, provenientes de fazendas parceiras, 
                    com grãos especiais e de nota superior a 80, cuidadosamente selecionados para garantir a melhor experiência sensorial. 
                    Deixe-se envolver pelos aromas e sabores únicos de cada blend e transforme sua pausa em um momento inesquecível.
                </h5>
            </div>
           <div class="menu-coffee-grid">
                <ItemMenu   
                title={"1. Café Espresso da Fazenda"}
                subTitle={"Intensidade: Alta | Perfil: Chocolate amargo, caramelo e notas de nozes"} 
                optimg={coffeeOpt1}
                description={"O espresso perfeito para quem aprecia a intensidade dos cafés finos. Feito com grãos arábica de uma das melhores fazendas da região, traz notas de chocolate amargo, leve dulçor de caramelo e um toque suave de nozes. Aprecie uma experiência rica e sofisticada, ideal para começar o dia com o pé direito."}
                />
                <ItemMenu   
                title={"2. Café Filtrado Terroir"}
                subTitle={"Intensidade: Média | Perfil: Frutas vermelhas, florais e leve acidez"} 
                optimg={coffeeOpt2}
                description={"Uma verdadeira viagem sensorial. O café filtrado é delicado e ao mesmo tempo marcante, com notas frescas de frutas vermelhas e um leve toque floral. A acidez suave e equilibrada traz uma sensação de frescor, tornando-o perfeito para ser degustado em momentos de relaxamento e descontração."}
                />
                <ItemMenu   
                title={"3. Café Cold Brew com Toque de Baunilha"}
                subTitle={"Intensidade: Suave | Perfil: Café gelado, baunilha e notas de frutas tropicais"} 
                optimg={coffeeOpt3}
                description={"Para quem busca uma experiência refrescante e suave. Nosso Cold Brew é extraído lentamente, com grãos arábica de alta qualidade, e é complementado por um toque sutil de baunilha e frutas tropicais. Ideal para um momento de pausa relaxante, especialmente nos dias mais quentes, quando a leveza do café é a protagonista."}
                />
                <ItemMenu   
                title={"4. Café Latte da Tradição"}
                subTitle={"Intensidade: Média | Perfil: Creme de leite, cacau e leve doçura"} 
                optimg={coffeeOpt4}
                description={"Para aqueles que amam a suavidade e o equilíbrio. Nosso Café Latte é preparado com leite vaporizado e um shot de espresso, criando uma combinação cremosa e envolvente. O sabor do café é suavizado pelo toque aveludado do leite, enquanto uma leve doçura de cacau finaliza a experiência com suavidade e harmonia."}
                />
           </div>
        </div>
    );
}

export default MenuCoffee;