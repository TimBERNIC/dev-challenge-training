import { useEffect, useState } from "react";
import axios from "axios"
import {Challenge} from './useAddChallenge'


const useFetchPosts = () => {


    const [challenge, setChallenge] = useState<Challenge[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string|null>(null)

    useEffect(()=> {
        axios.get<Challenge[]>('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
           setChallenge(res.data.slice(0,5))
           setIsLoading(false)})
        .catch(error => {
            console.error ("erreur: ", error)
            setIsLoading(false)} 
        )},[])
        
        return {challenge, isLoading, setChallenge, error}
        }  


export default useFetchPosts