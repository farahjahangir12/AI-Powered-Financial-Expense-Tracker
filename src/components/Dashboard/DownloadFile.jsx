import {Card,CardActionArea,CardContent,Chip,Button,Box, Typography} from "@mui/material"
import { useTheme } from "@emotion/react";
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function getMonthName(){
  const months=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]
  const today= new Date();
  const month = today.getMonth() === 0 ? 11 : today.getMonth()-1
  const year = today.getFullYear() === 0 ? today.getFullYear()-1 : today.getFullYear()
return (
  <Box>
    <Typography variant="h2" sx={{color:"white",textAlign:"center"}}>{months[month]}</Typography>
    <Typography variant="h6" sx={{color:"white", textAlign:"center"}}>{year}</Typography>
  </Box>
)
}
export default function DownloadFile(){
    const theme=useTheme();
    return(
        <Card sx={{ height:"250px", width:"250px", border:"1px solid #72276f",borderRadius:"20px",backgroundColor:theme.palette.button.primary}}>
          <CardActionArea>
            <CardContent>
            <Chip label="Expenditure Report" sx={{backgroundColor:theme.palette.primary.main, color:"white"}}/>
            <Box sx={{marginTop:2}}>{getMonthName()}</Box>
            <Button variant="contained" endIcon={<FileDownloadIcon />} sx={{backgroundColor:theme.palette.accent.convo, color:theme.palette.primary.main, marginTop:3}}>Download</Button>
            </CardContent>
          </CardActionArea>
        </Card>
        );
}
