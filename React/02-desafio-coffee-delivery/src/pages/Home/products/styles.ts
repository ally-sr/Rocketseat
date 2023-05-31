import { styled } from "styled-components";

export const ProductsContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content:center;
    gap:5rem;
    padding: 1rem;

`

export const ProductsContent = styled.div`
    width:100%;
    height: auto;
`
export const ProductCard = styled.div`
    width: 256px;
    height: 310px;
    background: ${props => props.theme.baseCard};
    padding: 0.1rem;
    border-top-right-radius: 3rem;
    border-bottom-left-radius: 3rem;
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 1rem;


    header{
        display: flex;
        flex-direction:column;
        align-items:center;

        span{
            background-color: ${props => props.theme.yellowLight};
            padding: 0.3rem;
            border-radius: 1rem;
            font-size:.8rem;
            font-weight:bold;
            color: ${props => props.theme.yellowDark};
        }
    }

    h1 {
        font-size:1.3rem;
        text-align:center;
    }
    img{
        position:relative;
        top:-2rem;
    }
    p{
        margin-top:1rem;
        text-align:center;
    }

    footer{
        display: flex;
        align-items:baseline;
        justify-content:space-evenly;
        margin-top:.6rem;

        p strong{
            font-weight:bold;
            font-size:1.5rem;
            font-family:'Baloo 2', cursive;
        }
        .cart{
            padding: 0.5rem;
            background-color: ${props => props.theme.purple};
            border-radius: .5rem;
            color: white;
            display: flex;
            align-items:center;
            justify-content:center;
            cursor: pointer;
        }

        .controls{
            display:flex;
            align-items:center;
            justify-content:center;
            p{
                background:${props => props.theme.baseButton};
                padding:.5rem 1rem;
                display:flex;
                gap:.5rem;
                align-items:center;
                justify-content:center;
                font-weight:bold;
                font-size:1.1rem;
                border-radius:.5rem;

                span{
                    color: ${props => props.theme.purple};
                    font-weight:bold;
                    cursor:pointer;
                }
            }
        }

    }
`

