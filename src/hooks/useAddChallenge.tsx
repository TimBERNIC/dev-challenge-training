import axios from "axios" 
import {useMemo, useState } from "react"
import {v4 as uuidv4} from 'uuid'

export interface Challenge {
    id: string|number,
    title: string|number,
    body: string|number
}

const useAddChallenge = (onSuccess?: (newChallenge:Challenge)=> void) => {

    const [Title, setTitle] = useState<string|number>('')
    const [description, setDescription] = useState<string|number>('')
    const [isLoadingNewChallenge, setIsLoadingNewChallenge] = useState<boolean>(false)
    const formId = useMemo(()=> uuidv4,[])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(!Title||!description) {
        alert('tout les champs doivent être remplis!')
        return
    } 
        setIsLoadingNewChallenge(true)

        const newChallenge:Challenge = {
            id: formId(),
            title : Title,
            body: description
        }

        axios.post('https://jsonplaceholder.typicode.com/posts',newChallenge)
        .then(response => {
            console.log("Envoi réussi de : ", response.data)
            setTitle('')
            setDescription('')
            if (onSuccess) {
                onSuccess(newChallenge);
              }
            setIsLoadingNewChallenge(false)

        })
        .catch(error => {
            console.error("Erreur lors de l'envoie de donnée", error)
            setIsLoadingNewChallenge(false)
        })
       ;
}
   
return {
    Title, 
    setTitle, 
    description, 
    setDescription, 
    isLoadingNewChallenge, 
    handleSubmit, 
    formId, 
    }
    
}

export default useAddChallenge