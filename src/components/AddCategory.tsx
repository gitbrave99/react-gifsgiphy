import { ChangeEvent, FormEvent, useState } from 'react'
import { MaterialUIModule } from '../materialui/MaterialUIModule'

interface AddCategoryProps {
    onAddCategory: (category: string) => void
}

export const AddCategory = ({ onAddCategory }: AddCategoryProps) => {

    const { FormControl, InputLabel, OutlinedInput } = MaterialUIModule()
    const [inputCategory, setInputCategory] = useState("")

    const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
        const { value } = evt.target
        setInputCategory(value)
    }

    const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        if (inputCategory.trim().length > 2) {
            onAddCategory(inputCategory.toLocaleLowerCase());
            console.log("enviando", inputCategory);
            setInputCategory("")
        }
    }

    return (
        <>
            <form onSubmit={(evt) => onSubmit(evt)}>
                <FormControl fullWidth sx={{ m: 1 }} >
                    <InputLabel className='sub-title' htmlFor="outlined-adornment-amount">Buscar gif</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="Buscar Gif"
                        name='inputcategory'
                        value={inputCategory}
                        onChange={onInputChange}
                    />
                </FormControl>
            </form>
        </>
    )
}
