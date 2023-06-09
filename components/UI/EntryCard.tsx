import { UIContext } from '@/context/UI';
import { Entry } from '@/interface';
import {Card, CardActionArea,CardContent,Typography,CardActions} from '@mui/material';
import { DragEvent, useContext } from 'react';

interface Props { 
   entry : Entry;
}

const EntryCard:React.FC<Props> = ({entry}) => {

   const { startDragging, endDragging } = useContext(UIContext);

   const onDragStart = (e:DragEvent<HTMLDivElement>) => {
      e.dataTransfer.setData('text',entry._id);
      // Todo : modificar el estado, para indicar que se esta arrastrando.
      startDragging();
   }

   const onDragEnd = () => {
      // Cancelar ondrag
      endDragging();
   }

   
   return (
      <Card 
         sx={{marginBottom:1,}}
         draggable
         onDragStart={onDragStart}
         onDragEnd={onDragEnd}
      >
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