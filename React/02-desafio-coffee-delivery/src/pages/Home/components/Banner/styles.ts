import { styled } from "styled-components";
import bannerBackground from '../../../../assets/bannerBackground.png'

export const BannerContainer = styled.div`

    width: 100%;
    height:34rem;
    margin:0 auto;
    background:url(${bannerBackground});

`

export const BannerContent = styled.div`
    width:1148px;
    height:360px;
    display: flex;
    margin: 0 auto;

    .text_content{
        width:50%;
        height:100%;
        display:flex;
        flex-direction:column;
        gap:3rem;
        justify-content:center;
        align-items:flex-start;

        h1{
            font-size:3rem;
        }
        p{
            font-size:1rem;
        }
    }

    .text_content .title_subtitle{
        display:flex;
        flex-direction:column;
        line-height:60px;
    }

    .text_content .items{
        width:567px;
        height:84px;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;

        .coffee, .cart, .timer, .package{
            padding:.3rem;
            display:flex;
            align-items:center;
            gap: 0.5rem;
        }

        .coffee span{
            display:flex;
            align-items:center;
            justify-content:center;
            background: ${props => props.theme.purple};
            padding:.5rem;
            border-radius: 50%;
            color:white;
        }
        .cart span{
            display:flex;
            align-items:center;
            justify-content:center;
            background: ${props => props.theme.yellowDark};
            padding:.5rem;
            border-radius: 50%;
            color:white;
        }
        .package span{
            display:flex;
            align-items:center;
            justify-content:center;
            background: ${props => props.theme.baseText};
            padding:.5rem;
            border-radius: 50%;
            color:white;
        }
        .timer span{
            display:flex;
            align-items:center;
            justify-content:center;
            background: ${props => props.theme.yellow};
            padding:.5rem;
            border-radius: 50%;
            color:white;
        }
    }


    .image_container{
        width:50%;
        height: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
    }
`

