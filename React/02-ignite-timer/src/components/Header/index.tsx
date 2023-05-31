import { HeaderContainer } from "./styles";
import LogoIgnite from '../../assets/Logo.svg'
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header(){
    return (
        <HeaderContainer>
            
            <img src={LogoIgnite} alt=""/>
            <nav>
                <NavLink to="/" title="timer">
                    <Timer/>
                </NavLink>
                <NavLink to="/history" title="histórico">
                    <Scroll/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}