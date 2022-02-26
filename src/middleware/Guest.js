import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticated } from '../store'

function Guest(props) {
    let navigate = useNavigate()
    const auth = useRecoilValue(authenticated)
    useEffect(() => {
        if(auth.check){
            navigate("/dashboard")
        }
    }, [])
    return props.render
}

export default Guest;