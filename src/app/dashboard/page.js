"use client"
import React from 'react'
import { removeAllCookies } from '../../utility/loginUtils'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const router = useRouter()
    const logout = ()=>{
        removeAllCookies()
        router.push("/login")
    }
  return (
    <div onClick={logout}>Logout</div>
  )
}

export default Dashboard