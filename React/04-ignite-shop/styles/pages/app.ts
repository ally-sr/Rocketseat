import { styled } from "..";

export const Container = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight:'100vh',
    justifyContent:'center',
    paddingBottom:'1rem'
})

export const NextHeader = styled('header',{
    padding:'2rem 0',
    width: '100%',
    maxWidth: '1180px',
    margin:'0 auto',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    img:{
        cursor: 'pointer',
    }
})

export const CartButton = styled('button',{
    width: '3rem',
    height:'3rem',
    color:'#8d8d99',
    fontSize:'$xl',
    borderRadius:8,
    backgroundColor:'$gray800',
    border:'none',
    transition:'all .1s ease-in-out',
    
    span:{
        display:'none',
    },

    '&.full':{
        span:{
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position:'absolute',
            top:'1.7rem',
            right:'2rem',
            fontSize:'0.875rem',
            backgroundColor:'$green500',
            borderRadius:'100%',
            padding:'.2rem',
            color:'white',
            width:'25px',
            border:'2px solid $gray900'
        },

    },

    

    '&:hover':{
        color:'$gray100',
        cursor:'pointer',
    }
})