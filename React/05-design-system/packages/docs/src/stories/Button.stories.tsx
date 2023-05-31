import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title:'Form/Button',
    component: Button,
    disabled: false,

    args:{
        children: 'Send',
        variant:'primary',
        size:'md'
    },
    argTypes: {
        variant:{
            options:['primary', 'secondary', 'terciery'],
            control:{
                type:'inline-radio'
            }
        },
        size:{
            options:['sm','md'],
                control:{
                    type:'inline-radio'
            }
        },
        disabled:{
            control:{
                type:'boolean'
            }
        },
        onClick:{
            action: 'click'
        }
    }

} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
    args:{
        variant:'secondary',
        children:'Create new'
    }
}

export const Terciary: StoryObj<ButtonProps> = {
    args:{
        variant:'terciary',
        children:'cancel'
    }
}

export const Small: StoryObj<ButtonProps> = {
    args:{
        size: 'sm'
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args:{
        disabled: true
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args:{
        children: (
            <>
                Próximo Passo
                <ArrowRight />
            </>
        )
    }
}