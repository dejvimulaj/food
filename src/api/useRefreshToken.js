import React from 'react'
import axios from './axios'
import { useAuthState } from '../hooks/store';
const useRefreshToken = () => {
    const {setAuthToken,setRefreshToken } = useAuthState();
    const authToken= useAuthState()
    const refreshToken= useAuthState()
    const refresh = async () => {
        const response = await axios.post('/api/auth/refresh', {
            token: refreshToken
        } )
        setAuthToken(response.data.token)
        setRefreshToken(response.data.refreshToken)
    }

  return (
    refresh
  )
}

export default useRefreshToken

