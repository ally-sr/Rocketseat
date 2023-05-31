import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@ignite-ui/react'

export default {
    title:'Form/Text Input',
    component: TextInput,
    decorators: [
        (Story) => {
            return (
                <Box as='label' css={{display:'flex', flexDirection:'column', gap:'$2'}}>
                    <Text size={'sm'}>E-mail address</Text>
                    {Story()}
                </Box>
            )
        }
    ],

    args:{}

} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args:{
        placeholder: 'Type your name'
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args:{
        prefix:'call.com/'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args:{
        disabled: true
    }
}

