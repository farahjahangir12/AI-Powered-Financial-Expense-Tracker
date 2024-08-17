import React from 'react';
import { Box, Paper, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import { useTheme } from '@emotion/react';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import {AvatarGroup} from '@mui/material';
import Stack from '@mui/material/Stack';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WalletIcon from '@mui/icons-material/Wallet';

function IconAvatars() {
    const theme = useTheme();
  return (
  <AvatarGroup max={3} sx={{marginLeft:2,}}>
  <Avatar sx={{backgroundColor:theme.palette.primary.main,color:"white"}}><CreditCardIcon/></Avatar>
  <Avatar sx={{backgroundColor:theme.palette.primary.main,color:"white"}}><AccountBalanceIcon/></Avatar>
  <Avatar sx={{backgroundColor:theme.palette.primary.main,color:"white"}}><WalletIcon/></Avatar>
</AvatarGroup>
  );
}

export default function Balance() {
  const theme = useTheme();
  return (
    <Card sx={{ background: 'linear-gradient(45deg, #7BC9FF 30%, #A3FFD6 90%)', width:"250px", height:"150px" }}>
      <CardActionArea>
        <CardContent>
            <Box sx={{marginBottom: 2,}}>
              <Typography variant="body1" sx={{ fontSize: '14px',color:theme.palette.primary.main}}>Rs.</Typography>
              <Typography variant="h1" sx={{ fontSize: '40px',color:theme.palette.primary.main, fontWeight:"bold"}}>20000.0</Typography>
              <Typography variant="body2" sx={{color:theme.palette.primary.main,fontWeight:"bold"}}>Balance</Typography>
            </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
