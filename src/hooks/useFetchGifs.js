import { useEffect, useState } from "react"
import { gefGifs } from '../helpers/GetGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        gefGifs(category)
        .then((imgs) => {

            setState({
                data: imgs,
                loading: false
            })
            
        })
    })

    return state; // { data:[], loading: true }
}