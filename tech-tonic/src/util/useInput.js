import { useState } from 'react';

export const useInput = (initialValue) => {
    // array destructuring 
    const [value, setValue] = useState(initialValue)

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return { value, onChange: handleChange }
}