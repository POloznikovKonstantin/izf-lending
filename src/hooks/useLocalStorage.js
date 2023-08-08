import { useState } from 'react'

export const useLocalStorage = (key, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const value = localStorage.getItem(key);


            if(value){
                return JSON.parse(value);
            }else{
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue
            }
        }catch (error) {
            return defaultValue
        }
    })

    const setValue = (neValue) => {
        try {
            localStorage.setItem(key, JSON.stringify(neValue))
        } catch (error) {
            console.log(error)
        }

        setStoredValue(neValue)
    }


    return [storedValue, setValue]
}
