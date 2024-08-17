import * as React from 'react';
import Card from '@mui/material/Card';
import { CardContent,CardActionArea,Box,Typography} from '@mui/material';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useTheme } from '@emotion/react';

function DividerStack() {
    const theme =useTheme()
    return (
      <div>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem sx={{color:"white"}}/>}
          spacing={2}
        >
         <Box sx={{borderRadius:"6px", padding:1}}><Typography variant="body3" sx={{textAlign:"center",color:"white"}}>Mon</Typography><Typography sx={{textAlign:"center",}}>1</Typography></Box>
         <Box sx={{borderRadius:"6px", padding:1, backgroundColor:theme.palette.accent.goals}}><Typography variant="body3" sx={{textAlign:"center",color:"white"}}>Tue</Typography><Typography sx={{textAlign:"center",color:"white"}}>1</Typography></Box>
         <Box sx={{borderRadius:"6px", padding:1}}><Typography variant="body3" sx={{textAlign:"center",color:"white"}}>Wed</Typography><Typography sx={{textAlign:"center",}}>1</Typography></Box>
        </Stack>
      </div>
    );
  }

export default function Reports(){
    const theme= useTheme();
    return(
    <Card sx={{ height:"250px", width:"250px", border:"1px solid #934379",borderRadius:"20px",backgroundColor:theme.palette.button.secondary}}>
      <CardActionArea>
        <CardContent>
            <Typography variant='body2' sx={{color:"white"}}>Bounce Rate</Typography>
            <Box sx={{marginTop:2 }}>
            <DividerStack/> 
            </Box>
           <Box>
            <Stack
             direction="row"
             divider={<Divider orientation="vertical" flexItem />}
             spacing={2}
             sx={{marginTop:8,}}>
                <Box sx={{padding:1}}><Typography variant="h5" sx={{color:theme.palette.primary.main,fontWeight:"800"}}>27%</Typography></Box>
                <Box><Typography variant="body2" sx={{color:"white"}}>+10%</Typography><Typography variant="body2" sx={{fontWeight:"600", color:"white"}}>Since Last Day</Typography></Box>
            </Stack>
           </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    );
}
