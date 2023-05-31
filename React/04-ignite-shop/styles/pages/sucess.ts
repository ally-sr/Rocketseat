import { styled } from "..";

export const SuccessContainer = styled('main',{
    width: '100%',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin:'0 auto',
    height: 656,

    h1:{
        fontSize:'$2xl',
        color:'$gray100',
    },

    p:{
        fontSize:'$xl',
        color:'$gray300',
        maxWidth: 560,
        textAlign: 'center',
        marginTop:'2rem',
        lineHeight:1.4,
    },

    a:{
        marginTop:'5rem',
        display:'block',
        fontSize:'$lg',
        color:'$green500',
        textDecoration: 'none',
        fontWeight:'bold',

        '&:hover':{
            color:'$green300'
        }
    }

})

export const ImageContainer = styled('div',{
    width:'100%',
    maxWidth: 140,
    height:145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%) ',
    borderRadius: 8,
    padding:'0.25rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 1px .1px black',

    img:{
        objectFit: 'cover',
    }
})

export const ImagesContainer = styled('div',{
    width:'100%',
    maxWidth: 140,
    height:145,
    marginLeft:'-1rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%) ',
    borderRadius: '50%',
    padding:'0.25rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 1px .1px black',

    img:{
        objectFit: 'cover',
    }
})

export const SuccessContent = styled('div', {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:'1rem',

    h4:{
        color:'$green500'
    }

})