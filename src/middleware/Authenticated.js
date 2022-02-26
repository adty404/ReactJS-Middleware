import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authenticated } from '../store'

function Authenticated(props) {
    let navigate = useNavigate()
    const auth = useRecoilValue(authenticated)
    useEffect(() => {
        if(!auth.check){
            navigate("/login")
        }
    }, [])
    return props.children
}

export default Authenticated;