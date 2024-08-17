import React from 'react';
import { Box, Paper, Typography, Chip, styled,Avatar } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@emotion/react';


const StyledPaper = styled(Paper)(({ theme}) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Insight() {
  const theme=useTheme();
  return (
    <StyledPaper sx={{background:"linear-gradient(45deg, #7BC9FF 30%, #A3FFD6 90%)",color:theme.palette.primary.main,width:"250px", height:"150px"}}>
      <StarIcon />
      <StarIcon />
      <StarBorderIcon />
      <StarBorderIcon />
      <StarBorderIcon />
      <Box sx={{display:"flex",justifyContent:"center"}}>
      <Typography variant="h5" sx={{marginRight:2,fontWeight:"bold"}}>
          Engagement
        </Typography>
      </Box>
      <Chip label="Refresh Feed" sx={{backgroundColor:theme.palette.primary.main,color:"white",marginTop:1}}/>
    </StyledPaper>
  );
}

export default Insight;
