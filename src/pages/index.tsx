// @ts-nocheck
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { imageOptimizer } from 'next/dist/server/image-optimizer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main style={{ backgroundColor: '#DBE6E0', height: '100vh' }}>
  <Image src="/home.jpg" alt="" layout="fill" objectFit="cover"  />

      <Container maxWidth="md" sx={{ p: 4 }}>
        <div style={{ position: 'relative' }}>
          <p style={{ ...styles.centerText, zIndex: 1 }}>野球ノート</p>
          <Box sx={styles.buttonContainer}>
            <Link href="/manager/login">
              <Button variant="contained" sx={buttonStyles.button}>
                指導者のログインはこちら
              </Button>
            </Link>
          </Box>
          <Box sx={styles.buttonContainer}>
            <Link href="/player/login">
              <Button variant="contained" sx={buttonStyles.button}>
                選手のログインはこちら
              </Button>
            </Link>
          </Box>
        </div>
      </Container>
    </main>
  );
}

const styles = {
  centerText: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 40,
    fontStyle: 'italic',
    textShadow: '#fff 2px 0, #fff -2px 0, #fff 0 -2px, #fff 0 2px, #fff 2px 2px, #fff -2px 2px, #fff 2px -2px, #fff -2px -2px, #fff 1px 2px, #fff -1px 2px, #fff 1px -2px, #fff -1px -2px, #fff 2px 1px, #fff -2px 1px, #fff 2px -1px, #fff -2px -1px, rgba(0, 0, 0, .5) 3px 3px 3px',
    position: 'relative',
    zIndex: 1,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 10,
    mb: 8,
  },
};

const buttonStyles = {
  button: {
    fontSize: 20,
    zIndex: 1,
  },
};





