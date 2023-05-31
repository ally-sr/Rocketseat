import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
    title:'Typography/Text',
    component: Text,
    size:'md',

    args:{
        children:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, a aliquid beatae accusamus nisi quo ipsa voluptate consectetur laboriosam repellendus voluptatum dolor, dolorum error suscipit, cupiditate possimus totam eveniet iste.'
    },
    argTypes:{
        size:{
            options:['xxs','xs','sm','md','lg','xl','2xl','4xl','5xl','6xl','7xl','8xl','9xl'],
            control:{
                type:'inline-radio'
            }
        },
    }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
    args:{
        children: 'Strong text', 
        as: 'strong'
    }
}