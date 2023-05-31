import {HandPalm, Play} from 'phosphor-react'
import {  HomeContainer, StartCountdownButton, StopCountdownButton} from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { useContext } from 'react'
import { NewCycleForm } from './Components/NewCycleForm'
import { CountDown } from './Components/CountDown'
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from 'zod'
import { CyclesContext } from '../../contexts/CyclesContext'






export function Home(){

    const { createNewCycle, activeCycle, interruptCurrentCycle} = useContext(CyclesContext)

    const newCycleFormValidationScheme = zod.object({
        task: zod.string().min(1, 'Informe a tarefa'),
        minutesAmount: zod
        .number()
        .min(5,'O ciclo precisa ser de no mínimo 5 minutos.')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
    })
    const newCycleForm = useForm<NewCycleFormData>({

        resolver: zodResolver(newCycleFormValidationScheme),

        defaultValues: {
            task:'',
            minutesAmount:0
        }
    })

    
    
    const { handleSubmit, watch, reset } = newCycleForm
    const task = watch('task')
    const isSubmitDisabled = !task
    
    function handleCreateNewCycle(data: NewCycleFormData){
        createNewCycle(data)
        reset()
    }

    type NewCycleFormData = zod.infer<typeof newCycleFormValidationScheme>
  
    
    return (

        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}> 
                

                    <FormProvider {...newCycleForm}>
                        <NewCycleForm />
                    </FormProvider>

                    <CountDown/>
                    {activeCycle ? (
                        <StopCountdownButton onClick={interruptCurrentCycle} type="submit">
                            <HandPalm/>
                            Interromper
                        </StopCountdownButton> 
                    ) : 
                        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
                        <Play/>
                        Começar
                        </StartCountdownButton> 
                    }
            </form>

        </HomeContainer>

    )
}