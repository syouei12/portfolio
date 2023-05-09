import  React, {useState,useEffect} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import  {firestore} from '@/utils/firebase';//自分が作成した @/=は自分作成した。
import  {query,collection,where,getDocs,} from 'firebase/firestore';
import { text } from 'stream/consumers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';//
import { alignProperty } from '@mui/material/styles/cssUtils';

type Reports={
comment:string;
condition:number;
date:number;
goal:string;
id:string;
managerId:string;
place:string;
playerId:string;
text:string;
weather:string;
}

export default function DisableElevation() {
  const [reports,setReports]= useState<Reports[]>([])
  const getReports = async () => {
    const reportsQuery=query(collection(firestore,'reports'),where('managerId','==','ggg'))
    const reportsSnap=await getDocs(reportsQuery)
    const reportsData:any=reportsSnap.docs.map(d=>d.data())
    console.log(reportsData)
    setReports(reportsData)
  }
  useEffect(()=>{
    getReports()
  },[])
  return(
    <>
    <Box
    sx={{
      display:'flex',
      justifyContent:'center',
      mt:4,
      mb:8,
      textDecoration:'none'
    }}>


    <Button sx={{mx:3,height:45,}} variant="contained" disableElevation>
    <Link href={'/manager/createaccount'} sx={{}}>
      <p style={{color:'white',}}>アカウント管理</p>
      </Link>
    </Button>

    <Button  variant="contained" disableElevation>
      設定
    </Button>
    </Box>

    <Box>
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
    </Box>

    <Box
    sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      listStyle:'none',
    }}>
      {reports.map(e=>{
        return <div className='reports' key={e.id}>
          <Link href={'/manager/report?id='+e.id}>
          <Card sx={{ margin:2, }}>
      <CardActionArea  sx={{width:350,}}>
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,}}>
        {e.playerId}
          </Typography>
          <Typography  sx={{fontSize:13,}}>
          {e.goal}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
        </div>
      })}
    </Box>


    </>
  );
}
