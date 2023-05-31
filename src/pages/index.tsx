import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <Container maxWidth="md" sx={{p:4}}>
       <Box
    sx={{
      display:'flex',
      justifyContent:'center',
      mt:4,
      mb:8,
      textDecoration:'none'
    }}>
      <Link href={'/manager/login'} >
      <Button variant="contained">
          指導者のログインはこちら
            </Button>
            </Link>
            </Box>
      <Box
    sx={{
      display:'flex',
      justifyContent:'center',
      mt:4,
      mb:8,
      textDecoration:'none'
    }}>
            <Link href={'/player/login'} >
      <Button variant="contained">
          選手のログインはこちら
            </Button>
            </Link>
            </Box>
    
       </Container>
       </>
  )
}
