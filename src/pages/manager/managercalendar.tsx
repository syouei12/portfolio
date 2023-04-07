import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function DisableElevation() {
  return (
    <>
    <Box
    sx={{
      display:'flex',
      justifyContent:'center',
      width:800,
      mt:4,
      mb:8,
    }}>
    <Button sx={{mx:3}} variant="contained" disableElevation>
      アカウント管理
    </Button>
    <Button  variant="contained" disableElevation>
      設定
    </Button>
    </Box>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
    </>
  );
}
