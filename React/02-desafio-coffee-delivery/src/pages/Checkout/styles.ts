import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
    width:100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
`

export const FormContainer = styled.div`
    width:40rem;
    height:37rem;

    form{
        display:flex;
        flex-direction:column;
        gap:1rem;
        flex:1;

        h1{
            font-size:1.2rem;
        }
        
    }
    .formTop{
        width:100%;
        height:23.25rem;
        background-color:${props => props.theme.baseCard};
        border-radius:8px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:flex-start;
        gap:2rem;

        header{
            display:flex;
            gap: 0.5rem;
            padding:0 40px;

            h4{
                font-weight:lighter;
            }
            p{
                font-size:.8rem;
            }
        }

        .inputs{
            display:flex;
            flex-wrap:wrap;
            width:560px;
            margin:0 auto;
            gap:.5rem;

            input{
                padding:.8rem;
                background: ${props => props.theme.baseInput};
                border: 1px solid ${props => props.theme.baseButton};
                border-radius:6px;

                &::placeholder{
                    color: ${props => props.theme.baseLabel};
                }

            }

            .cep{
                width:200px;
                margin-right:10rem;

            }

            .rua{
                width:100%;
            }

            .numero{
                width:200px;
            }

            .complemento{
                flex:1;
            }

            .bairro{
                width:200px;
            }

            .cidade{
                flex:1;
            }

            .uf{
                width:60px;
            }
        }

        
    }

    .formBottom{
        width:100%;
        height:12rem;
        background-color:${props => props.theme.baseCard};
        border-radius:8px;
        display:flex;
        flex-direction:column;
        gap:3rem;

        header{
            display:flex;
            gap: 0.5rem;
            padding: 0 40px;
            margin-top:2rem;

            h4{
                font-weight:lighter;
            }
            p{
                font-size:.8rem;
            }
        }

    }
`

export const PaymentTypeContainer = styled.div`
    width:560px;
    display:flex;
    margin:0 auto;
    justify-content:space-evenly;
    gap:.5rem;
`

export const PaymentTypeButton = styled.button`
    width: 178.67px;
    display: flex;
    flex-direction:row;
    flex:1;
    padding:.8rem;
    gap: 0.5rem;
    align-items:flex-start;
    justify-content:center;
    border:none;
    background-color:${props => props.theme.baseButton};
    border-radius:4px;
    border:.5px solid ${props => props.theme.baseButton};



    p{
        font-size:.8rem;
    }

    &:hover{
        border:.5px solid ${props => props.theme.purple};
        cursor:pointer;
    }
`

export const PaymentContainer = styled.div`
    width:448px;
    height:498px;
    display:flex;
    flex-direction:column;
    gap:1rem;

    h1{
        font-size:1.2rem;
    }
`

export const PaymentContent = styled.div`
    width:100%;
    height:100%;
    background-color:${props => props.theme.baseCard};
    border-radius:8px;
    
    margin: 0 auto;

    img{
            width:64px;
            height:64px;
            margin-top:1.2rem;
    }

    div{
        display:flex;
        padding:1.4rem;
        display:flex;
        align-items:flex-start;
        justify-content:center;
        border-bottom:1px solid ${props => props.theme.baseButton};
        width:80%;
        margin: 0 auto;
        strong{
                margin-top:1.2rem;
        }


        .controls{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            width:171px;
            height:61px;
            gap:.5rem;
            align-items:center;
            justify-content:flex-start;
            border:none;

            button{
                width:91px;
                height:32px;
                background-color:${props => props.theme.baseButton};
                border-radius:4px;
                border:none;
                display: flex;
                align-items:center;
                justify-content:center;
                font-size:.8rem;
                gap:.1rem;
                color:${props => props.theme.baseText};
            }

            p{
                width:72px;
                height:32px;
                display:flex;
                align-items:center;
                justify-content:center;
                gap: 0.5rem;
                background-color:${props => props.theme.baseButton};
                border-radius:4px;
                span{
                    color:${props => props.theme.purple};
                }
            }

            h4{
                font-weight:lighter;
            }

            
        }
    }

    footer{
        margin: 0 auto;
    }
    .footer{
        display:flex;
        width:90%;
        margin:0 auto;
        align-items:space-between;
        justify-content:space-around;
        flex:1;
        border:none;
        
        text-align:center;
        div{
            margin:0 auto;

            display:flex;
            flex-direction:column;
            gap:1rem;
            padding:1rem;
            flex:1;
            border:none;
            width:50%;
        }
    }


`