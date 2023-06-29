// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import  React, {useState,useEffect} from 'react';
import Button from "@mui/material/Button";
import {useRouter} from 'next/router'
import {getAuth,signOut} from 'firebase/auth'


//sxでcssをあてる
export default function LogoutButton() {
const auth=getAuth();
const router=useRouter()

const logOut=()=>{
    signOut(auth).then(()=>{
    router.push('/')
    })

}
return (
    <>
    <Button onClick={logOut} variant="contained"  size="small" sx={{mx:3,p:1}}>ログアウト
    </Button>
    </>
)
}