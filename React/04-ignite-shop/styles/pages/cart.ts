import { getDisplayName } from "next/dist/shared/lib/utils";
import { styled } from "..";

export const CartContainer = styled('div', {
    position: 'fixed',
    top:0,
    right:-500,
    zIndex: 9999,
    width: '100%',
    maxWidth: '30rem',
    height: 'calc(100vh + 1rem)',
    backgroundColor: '$gray800',
    padding:'3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition:'all .8s ease-in-out',


    header:{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap:'2rem',

        span:{
            marginLeft:'auto',
            fontSize:'$lg',
            cursor:'pointer',
            color:'$gray300',

            '&:hover':{
                color:'$grey100'
            }
        },

        h1:{
            fontSize:'$lg',
            marginRight:'auto',
            marginBottom:'2rem'
        }
    },

    '&.open':{
       right: 0,
    }
})

export const CartItem = styled('div', {
    width:'100%',
    display:'flex',
    alignItems: 'center',
    gap:'1rem',
    marginTop:'1rem'
});


export const CartImageContainer = styled('div',{
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%) ',
    width: '100%',
    maxWidth: '6.37125rem',
    height:'5.8125rem',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

});



export const CartItemContent = styled('div',{
    display:'flex',
    flexDirection:'column',
    gap:'.3rem',

    h1:{
        fontSize:'$lg',
        fontWeight:'lighter'
    },

    a:{
        color:'$green500',
        fontWeight:'bold',

        '&:hover':{
            color:'$green300',
            cursor:'pointer'
        }
    }
});


export const CheckoutContainer = styled('div',{
    width: '100%',
    marginTop:'auto',

    button:{
        width:'100%',
        marginTop:'2rem',
        backgroundColor:'$green500',
        border:0,
        color:'$white',
        borderRadius:8,
        padding:'1.25rem',
        cursor:'pointer',
        fontWeight:'bold',
        fontSize:'$md',
        
        '&:disabled':{
            opacity: 0.6,
            cursor:'not allowed',
        },

        '&:not(:disabled):hover':{
            backgroundColor:'$green300'
        },
    }
});

export const CheckoutInfo = styled('div',{
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    h1:{
        fontSize:'$xl'
    },

    div:{
        padding:'1rem 0',
        display:'flex',
        flexDirection:'column',
        gap:'.5rem',

    }
});
