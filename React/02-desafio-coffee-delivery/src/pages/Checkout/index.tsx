import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
import { CheckoutContainer, FormContainer, PaymentContainer, PaymentContent, PaymentTypeButton, PaymentTypeContainer } from "./styles";

import expressoTradicional from '../../assets/cafes/expressoTradicional.svg'

export function Checkout(){
    return(
       <CheckoutContainer>
        <FormContainer>
            <form>
                <h1>Complete o seu pedido</h1>
                <div className="formTop">
                    <header>
                        <MapPin size={22} color="#C47F17"/>
                        <div>
                            <h4>Endereço de Entrega</h4>
                            <p>Informe o endereço onde deseja receber o produto</p>
                        </div>
                    </header>
                    <div className="inputs">
                        <input className="cep" type="number" placeholder="CEP" name="CEP"/>
                        <input className="rua" type="text" placeholder="Rua" name="Rua"/>
                        <input className="numero" type="number" placeholder="Número" name="Numero"/>
                        <input className="complemento" type="text" placeholder="Complemento" name="Complemento"/>
                        <input className="bairro" type="text" placeholder="Bairro" name="Bairro"/>
                        <input className="cidade" type="text" placeholder="Cidade" name="Cidade"/>
                        <input className="uf" type="text" placeholder="UF" name="UF"/>
                    </div>
                </div>
                <div className="formBottom">
                    <header>
                        <CurrencyDollar size={22} color="#8047F8"/>
                        <div>
                            <h4>Pagamento</h4>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </header>
                    
                    <PaymentTypeContainer>
                        <PaymentTypeButton>
                            <span><CreditCard size={16} color="#8047F8"/></span>
                            <p>CARTÃO DE CRÉDITO</p>
                        </PaymentTypeButton>
                        <PaymentTypeButton>
                            <span><Bank size={16} color="#8047F8"/></span>
                            <p>CARTÃO DE DÉBITO</p>
                        </PaymentTypeButton>
                        <PaymentTypeButton>
                            <span><Money size={16} color="#8047F8"/></span>
                            <p>DINHEIRO</p>
                        </PaymentTypeButton>
                    </PaymentTypeContainer>
                </div>
            </form>
        </FormContainer>
        <PaymentContainer>
            <h1>Cafés selecionados</h1>

            <PaymentContent>
                <div>
                    <img src={expressoTradicional} alt=""/>
                    <div className="controls">
                        <h4>Expresso Tradicional</h4>
                            <p>
                                <span><Minus/></span>
                                         1 
                                <span><Plus/></span>
                            </p>
                            <button>
                                <Trash size={16} color="#8047F8"/>
                                REMOVER
                            </button>
                    </div>
                    <strong>R$9,90</strong>
                </div>
                <footer>
                    <div className="footer">
                        <div>
                            <p>Total de itens</p>
                            <p>Entrega</p>
                            <h1>Total</h1>
                        </div>
                        <div>
                            <p>R$9,90</p>
                            <p>R$3,50</p>
                            <h1>R$13,40</h1>
                        </div>
                    </div>
                </footer>
            </PaymentContent>

        </PaymentContainer>
       </CheckoutContainer>
    )
}