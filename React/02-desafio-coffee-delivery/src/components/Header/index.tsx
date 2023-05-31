import { HeaderContainer, HeaderContent } from "./styles";
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
    return (
        <HeaderContainer> 
            <HeaderContent>
                <img src={logo} alt="" />

                <div className="headerInfo">
                    <p>
                        <MapPin size={22} weight={'fill'}/>
                        Recife-PE
                    </p>
                    <button><ShoppingCart size={22} weight={'fill'}/></button>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}