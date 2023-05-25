import  React, {useState,useEffect} from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/system';
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
import {getAuth} from 'firebase/auth'
import dayjs, { Dayjs } from 'dayjs';

type Reports={
name:string;
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



export default function BasicDateCalendar() {

  const today = new Date()//Calendarの日付部分の今を表す設定
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(today));

   console.log(value);
  const auth=getAuth();
  const [uid, setUid] = useState('');
  const getUid = async()=>{
    const user = auth.currentUser//ログインしないとコンソールでnull
    console.log(user);
    if(user){
      setUid(user?.uid)
    }
  }//自分のチームのmanagerIDの部分のレポートだけ抜き取る

  useEffect(()=>{
    getUid()
    console.log(uid)
  },[auth])
  const [reports,setReports]= useState<Reports[]>([])
  const [filteredReports,setFilteredReports]= useState<Reports[]>([])
  const getReports = async () => {
    const reportsQuery=query(collection(firestore,'reports'),where('managerId','==',uid))
    const reportsSnap=await getDocs(reportsQuery)
    const reportsData:any=reportsSnap.docs.map(d=>d.data())
    console.log(reportsData)
    setReports(reportsData)

    const filteredReportData=reportsData.filter(e=>{
      const unixTime = e.date
      const date = dayjs(unixTime).format('YYYY-MM-DD')//
      const isSelectedDate = (date===value?.format('YYYY-MM-DD'));
      return isSelectedDate
    })
    setFilteredReports(filteredReportData);
  }
  useEffect(()=>{
    getReports()
  },[uid])//中のuidを取ってから動く



  const changeReports = async () => {
    const filteredReportData=reports.filter(e=>{
      const unixTime = e.date
      const date = dayjs(unixTime).format('YYYY-MM-DD')//
      const isSelectedDate = (date===value?.format('YYYY-MM-DD'));
      return isSelectedDate
    })
    setFilteredReports(filteredReportData);
  }
  useEffect(()=>{
    changeReports()
  },[value])

  return (
    <>
    <Box
    sx={{
      textAlign:"center",
    }}
    >
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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

      {filteredReports.map(e=>{
        return <div className='reports' key={e.id}>
          <Link href={'/player/report?id='+e.id}>
          <Card sx={{ margin:2, }}>
      <CardActionArea  sx={{width:350,}}>
        <CardContent>
          <Typography gutterBottom sx={{fontSize:18,}}>
        {e.name}
          </Typography>

          <Typography  sx={{fontSize:14,}}>
          {e.goal}
          {/* 選手のレポート部分の目標を持ってきている */}
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