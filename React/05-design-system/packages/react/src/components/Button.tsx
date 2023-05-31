import { styled } from "@stitches/react";
import { ComponentProps, ElementType } from "react";



export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize:'$sm',
    fontWeight: 'bold',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap:'$2',

    cursor:'pointer',

    svg:{
        width:'$4',
        height:'$4'
    },

    variants:{
        variant:{
            primary: {
                color:'$white',
                backgroundColor:'$ignite500',

                '&:not(:disabled):hover':{
                    backgroundColor:'$ignite300',
                },
                '&:disabled':{
                    color:'$gray200',
                    backgroundColor:'$gray400',
                    cursor:'not-allowed'
                }
            },
            secondary:{
                color: '$ignite300',
                border:'2px solid $ignite500',

                '&:not(disabled):hover':{
                    backgroundColor:'$ignite500',
                    color:'#FFF'
                },
                '&:disabled':{
                    color:'$gray200',
                    borderColor:'$gray200',
                }
            },
            terciary:{
                color: '$gray100',

                '&:not(disabled):hover':{
                    color:'#FFF'
                },
                '&:disabled':{
                    color:'$gray600',
                }
            }
        },
        size:{
            sm:{
                padding: '0 $4',
                height: 38,
            },
            md:{
                padding: '0 $4',
                height: 46,
            },
        },
    
    },

    
    defaultVariants: {
        variant:'primary',
        size: 'md'
    },

    



})



export interface ButtonProps extends ComponentProps<typeof Button>{
    as?: ElementType
}

Button.displayName = 'Button'