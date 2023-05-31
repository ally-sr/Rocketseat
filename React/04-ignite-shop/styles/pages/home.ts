import { styled } from "..";

export const HomeContainer = styled('main',{
    display: 'flex',
    width:'100%',
    maxWidth:'calc(100vw - ((100vw - 1180px) / 2))',
    marginLeft:'auto',
    overflow: 'hidden',


});

export const Product = styled('div', {
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%) ',
    borderRadius: 8,
    cursor:'pointer',
    position: 'relative',
    overflow:'hidden',

    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img:{
        objectFit: 'cover',
    },

    footer:{
        position:'absolute',
        bottom:'0.5rem',
        left:'0.25rem',
        right:'0.25rem',
        padding:'1.5rem',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        backgroundColor: 'rgba(0, 0, 0, 0.8)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition:'all 0.2s ease-in-out',

        div:{
            display: 'flex',
            flexDirection: 'column',
            gap:'.5rem',

            strong:{
                fontSize:'$lg',
                color: '$gray100',
            },
    
            span:{
                fontSize:'$xl',
                fontWeight:'bold',
                color: '$green300'
            },
        },

        button:{
            display:'flex',
            alignItems:'center',
            justifyContent: 'center',

            width:'3.5rem',
            height:'3.5rem',
            fontSize:'$2xl',
            borderRadius:8,
            backgroundColor:'$green500',
            border:'none',
            color:'$white',


            cursor:'pointer',

            '&:hover':{
                backgroundColor:'$green300',
            }
        }

    },

    '&:hover':{

        footer:{
            transform:'translateY(0%)',
            opacity:1
        }
    }
});