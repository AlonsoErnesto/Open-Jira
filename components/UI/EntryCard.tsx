import { Entry } from '@/interface';
import {Card, CardActionArea,CardContent,Typography,CardActions} from '@mui/material';

interface Props { 
   entry : Entry;
}

const EntryCard:React.FC<Props> = ({entry}) => {
   return (
      <Card sx={{
         marginBottom:1,

      }}>
         <CardActionArea>
            <CardContent>
               <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex',justifyContent:'end', paddingRight:2}} >
               <Typography variant='body2'>hace 30 minutos</Typography>
            </CardActions>
         </CardActionArea>
      </Card>
   )
}

export default EntryCard;