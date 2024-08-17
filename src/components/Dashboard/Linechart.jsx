
import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';


const uData = [600,750,650,830,700];
const xLabels = [
  'August',
  'September',
  'October',
  'November',
  'December',
];

export default function Linechart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[{ data: uData, label: 'Predictive Expenditure', area: true, showMark: false }]}
      xAxis={[{ scaleType: 'point', data: xLabels, labelStyle:{color:"white"}}]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        
        },
        backgroundColor:"white",
        marginTop:2,
        marginLeft:4,
      }}
      labelStyle={{color:"white"}}
    />
  );
}
