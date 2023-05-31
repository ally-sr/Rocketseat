import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerContainer, BannerContent } from "./styles";
import branding from '../../../../assets/branding.svg'

export function Banner(){
    return(
        <BannerContainer>
            <BannerContent>
                <div className="text_content">
                    <div className="title_subtitle">
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>
                    <div className="items">
                        <p className="cart"><span><ShoppingCart weight={'fill'}/></span>Compra simples e segura</p>
                        <p className="timer"><span><Timer weight={'fill'}/></span>Entrega rápida e rastreada</p>
                        <p className="package"><span><Package weight={'fill'}/></span>Embalagem mantém o café intacto</p>
                        <p className="coffee"><span><Coffee weight={'fill'}/></span>O café chega fresquinho até você</p>
                    </div>
                </div>
                <div className="image_container">
                    <img src={branding} alt=""/>
                </div>
            </BannerContent>
        </BannerContainer>
    )
}