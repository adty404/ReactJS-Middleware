import { atom } from 'recoil'

const authenticated = atom({
    key: 'authenticated',
    default : {
        check: true,
        user: { name: 'Aditya Prasetyo' }
    }
})

export { authenticated }