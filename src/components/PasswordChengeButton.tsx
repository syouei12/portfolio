// @ts-nocheck
//import styles from '@/styles/Report.module.css'
import  React, {useState,useEffect} from 'react';
import Button from "@mui/material/Button";
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'


//sxでcssをあてる
export default function LogoutButton() {
const auth=getAuth();


const passwordReset=()=>{
    if(!confirm('再設定用のURLを送信します。よろしいですか？'))return
    sendPasswordResetEmail(auth,auth.currentUser?.email).then(()=>{
        alert('ご登録のメールアドレスに再設定用のURLを送信しました。')
    })

}
return (
    <>
    <Button onClick={passwordReset} variant="contained"  size="small" sx={{mx:3,p:1}}>パスワード変更
    </Button>
    </>
)
}