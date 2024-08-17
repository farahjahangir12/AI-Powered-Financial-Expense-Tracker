import React from 'react';
import { Button, Paper,Typography, styled } from '@mui/material';
import { useTheme } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import {AvatarGroup} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WalletIcon from '@mui/icons-material/Wallet';
import AddIcon from '@mui/icons-material/Add';

function IconAvatars() {
    const theme = useTheme();
  return (
  <AvatarGroup max={3} sx={{margin:"0 auto"}}>
  <Avatar sx={{backgroundColor:theme.palette.primary.main,color:"white"}}><CreditCardIcon/></Avatar>
  <Avatar sx={{backgroundColor:theme.palette.primary.main,color:"white"}}><AccountBalanceIcon/></Avatar>
  <Avatar sx={{backgroundColor:theme.palette.primary.main,color:"white"}}><WalletIcon/></Avatar>
</AvatarGroup>
  );
}


const StyledPaper = styled(Paper)(({ theme}) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Cards() {
  return (
  <StyledPaper sx={{display:"flex",flexDirection:"column",justifyContent:"between",alignItems:"center"
    ,background:"linear-gradient(270deg, #A3FFD6 30%, #7BC9FF 90%)",width:"250px", height:"150px"

  }}>
    <IconAvatars/>
    <Button variant="outlined" sx={{marginTop:3}} endIcon={<AddIcon />}>Add</Button>
  </StyledPaper>
  );
}

export default Cards;
