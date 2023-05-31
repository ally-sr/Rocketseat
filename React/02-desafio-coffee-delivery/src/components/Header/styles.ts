import styled from "styled-components";

export const HeaderContainer = styled.header`
    
    width: 100%;
    height:6.5rem;
    max-width: 1120px;
    padding:1rem 1rem;
    margin: 0 auto;
    display: flex;
    align-items:center;



`

export const HeaderContent = styled.div`

    width: 100%;    
    display:flex;
    align-items:center;
    justify-content:space-between;


    .headerInfo{
        display:flex;
        gap: 1rem;

        p{
            display: flex;
            align-items:center;
            padding: 0.6rem;
            background-color:${props => props.theme.purpleLight};
            gap: 4px;
            border-radius:8px;
            font-weight:500;
            color:${props => props.theme.purpleDark};
        }

        button{
            display: flex;
            align-items:center;
            justify-content:center;
            padding:0.5rem;
            background-color:${props => props.theme.yellowLight};
            color:${props => props.theme.yellowDark};
            border-radius:8px;
            border:none;
            cursor:pointer;
        }
    }


`