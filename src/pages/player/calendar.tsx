import React, { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/system';
import { firestore } from '@/utils/firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Container from "@mui/material/Container";


type Reports = {
  name: string;
  comment: string;
  condition: number;
  date: number;
  goal: string;
  id: string;
  managerId: string;
  place: string;
  playerId: string;
  text: string;
  weather: string;
};

export default function BasicDateCalendar() {
  const today = new Date();
  const [value, setValue] = useState<Dayjs | null>(dayjs(today));
  const auth = getAuth();
  const [uid, setUid] = useState('');

  const getUid = async () => {
    const user = auth.currentUser;
    if (user) {
      setUid(user?.uid);
    }
  };

  useEffect(() => {
    getUid();
  }, [auth]);

  const [reports, setReports] = useState<Reports[]>([]);
  const [filteredReports, setFilteredReports] = useState<Reports[]>([]);

  const getReports = async () => {
    const reportsQuery = query(collection(firestore, 'reports'), where('playerId', '==', uid));
    const reportsSnap = await getDocs(reportsQuery);
    const reportsData: any = reportsSnap.docs.map((d) => d.data());
    setReports(reportsData);

    const filteredReportData = reportsData.filter((e) => {
      const unixTime = e.date;
      const date = dayjs(unixTime).format('YYYY-MM-DD');
      const isSelectedDate = date === value?.format('YYYY-MM-DD');
      return isSelectedDate;
    });
    setFilteredReports(filteredReportData);
  };

  useEffect(() => {
    getReports();
  }, [uid]);

  const changeReports = async () => {
    const filteredReportData = reports.filter((e) => {
      const unixTime = e.date;
      const date = dayjs(unixTime).format('YYYY-MM-DD');
      const isSelectedDate = date === value?.format('YYYY-MM-DD');
      return isSelectedDate;
    });
    setFilteredReports(filteredReportData);
  };

  useEffect(() => {
    changeReports();
  }, [value]);

  const handleLogout = async () => {
    await signOut(auth);
    // Perform any additional logout actions you need here
  };

  return (
    <>
    <Image src="/calendar.jpg" alt="" fill={true} sizes='100%' style={{ filter: 'brightness(50%)',opacity:0.2, }} />

    <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: 4,
          py: 2,
          backgroundColor: '#333',
          color: 'white',
        }}
      >

        <Typography variant="h6">myレポート</Typography>
        <Link href="/player/login">
      <Button variant="contained"  size="small" sx={{mx:3,p:1}}>ログアウト</Button>
      </Link>
      </Box>
    <Container sx={{width:'100vw',mx:'auto',my:0,p:3,}}>





      <Box sx={{  mb: 8 ,display: 'flex', justifyContent: 'center'}}>
        <Link href="/player/report">
          <Button variant="contained" sx={{ p: 2 }}>
            レポートを作成する
          </Button>
        </Link>
      </Box>

      <Box sx={{ flexDirection: 'column', alignItems: 'center', display: 'flex', justifyContent:'center', textAlign: 'center',maxWidth:'md',mx:'auto' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} sx={{  backgroundColor:'whitesmoke' }} />
        </LocalizationProvider>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', listStyle: 'none' }}>
        {filteredReports.map((e) => {
          return (
            <div className="reports" key={e.id}>
              <Card sx={{ margin: 4 }}>
                  <CardContent>
                    <Typography gutterBottom sx={{ fontSize: 18 }}>{e.name}</Typography>
                    <Typography gutterBottom sx={{ fontSize: 18 }}>
                      {'場所：'+e.place}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 18 }}>
                      {'天気：'+e.weather}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 18 }}>
                      {'調子：'+e.condition}
                    </Typography>
                    <Typography sx={{ fontSize: 18 }}>{e.goal}</Typography>
                    <Typography gutterBottom sx={{ fontSize: 18 }}>
                      {'今日の反省点：'+e.text}
                    </Typography>
                    <Typography gutterBottom sx={{ fontSize: 18 }}>
                      {'指導者からのコメント:'+e.comment}
                    </Typography>
                  </CardContent>
              </Card>
            </div>
          );
        })}
      </Box>
      </Container>

    </>
     );
}
