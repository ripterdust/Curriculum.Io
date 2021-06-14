import { useState } from "react"
import { useHistory } from "react-router-dom";

export const useRedirect = ({data = {}}) => {
    const [ state, setState ] = useState(data)
    const history = useHistory()

    const push = () => {
        console.log(state)
    }

    return [push];

}
