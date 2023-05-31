import { ProductCard, ProductsContainer, ProductsContent } from "./styles";
import expressoTradicional from "../../../assets/cafes/expressoTradicional.svg"
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Products(){
    return (
       <ProductsContainer>
        <h1>Nossos Cafés</h1>
        <ProductsContent>
            <ProductCard>
                <div>
                    <header>
                        <img src={expressoTradicional} alt=""/>
                        <span>Tradicional</span>
                    </header>
                        <h1>Expresso Tradicional</h1>
                        <p>O tradicional café feito com água quente e grãos moídos</p>                        
                    <footer>
                        <p>R$<strong> 9,90</strong></p>
                        <div className="controls">
                            <p>
                                <span><Minus/></span>
                                        1
                                <span><Plus/></span>
                            </p>
                        </div>
                        <span className="cart">
                            <ShoppingCart size={20} weight={'fill'}/>
                        </span>
                    </footer>
                </div>
            </ProductCard>
        </ProductsContent>
       </ProductsContainer>
    )
}