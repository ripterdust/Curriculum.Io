import { useState } from "react"
import { useHistory } from "react-router-dom";

export const useRedirect = ({data}) => {
    const [ urlData , setState ] = useState(data)
    const history = useHistory()

    const push = (inf) => {
        setState(inf);
        let { id, name, profession, email, phone, enterprise, jobTitle, university, grade } = inf;
        let url = `/pdf/${id}/${name}/${profession}/${email}/${phone}/${enterprise}/${jobTitle}/${university}/${grade}`;
        history.push(url)
    }

    return [push];

}
