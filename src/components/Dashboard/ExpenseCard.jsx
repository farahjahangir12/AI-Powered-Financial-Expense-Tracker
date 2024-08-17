import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea,Box } from '@mui/material';
import { AccountBalanceWallet } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  backgroundColor: '#49243E',
  color:"white",
};

const listStyle={
  display:"flex",
   flexDirection:"column", 
   alignItems:"start", 
   color:"white"
}

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: "100%",
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.button.tertiary : '#308fe8',
  },
}));


 function DividerVariants() {
  return (
    <List sx={style}>
      <ListItem sx={listStyle}>
        <ListItemText primary="Food" sx={{textAlign:"left"}} />
        <BorderLinearProgress value={50} variant='determinate'/>
      </ListItem >
      <Divider component="li" />
      <ListItem  sx={listStyle} >
        <ListItemText primary="Shopping" />
        <BorderLinearProgress  value={90} variant='determinate'/>
      </ListItem>
      <Divider component="li" />
      <ListItem  sx={listStyle}>
        <ListItemText primary="Grocery" />
        <BorderLinearProgress  value={65} variant='determinate'/>
      </ListItem>
      <Divider component="li" />
      <ListItem  sx={listStyle}>
        <ListItemText primary="Bills" />
        <BorderLinearProgress  value={75} variant='determinate'/>
      </ListItem>
      <Divider component="li"/>
      <ListItem  sx={listStyle}>
        <ListItemText primary="Others" />
        <BorderLinearProgress  value={60} variant='determinate'/>
      </ListItem>
    </List>
  );
}


export default function ExpenseCard() {
  const theme = useTheme();
  return (
    <Card sx={{ width:"300px", height:"350px", border:"1px solid #49243E",borderRadius:"10px",backgroundColor:"#49243E",marginTop:2}}>
      
      <CardActionArea>
        <CardContent>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"6px"}}>
        <AccountBalanceWallet sx={{color:"white", fontWeight:"bold"}}/>
        <Typography variant='body1' sx={{textAlign:"center",color:"white"}}>
          Monthly Expenditure
        </Typography>
      </Box>
      <DividerVariants/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
