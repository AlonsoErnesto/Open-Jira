import { useContext, useMemo,DragEvent } from 'react';
import { Paper, List} from '@mui/material';
import {EntryCard} from './';
import { EntryStatus } from '@/interface';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/UI';
import styles from './EntryList.module.css';

interface Props {
   status : EntryStatus;
}

const EntryList:React.FC<Props> = ({status}) => {

   const { entries, updateEntry } = useContext(EntriesContext);
   const { isDragging, endDragging } = useContext(UIContext);

   const entriesByStatus = useMemo(()=> entries.filter(entry => entry.status === status), [entries]);
   
   const onDropEntry = (e:DragEvent<HTMLDivElement>) => {
      const id = e.dataTransfer.getData('text');
      const entry = entries.find(e => e._id === id)!;
      entry.status = status;
      updateEntry(entry);
      endDragging();
   }

   const allowDrop = (e:DragEvent<HTMLDivElement>) => {
      e.preventDefault();
   }

  return (
      <div 
         onDrop={onDropEntry}
         onDragOver={allowDrop}
         className={isDragging ? styles.dragging : ''}
      >
         <Paper sx={{height:'calc(77.7vh)', overflowY:'scroll',  backgroundColor:'transparent', padding:2}}>
            <List sx={{opacity:isDragging ? .2 : 1, transition:'all .5' }} >
               {
                  entriesByStatus.reverse().map(entry => (
                     <EntryCard key={entry._id} entry={entry}/>
                  ))
               }
            </List>
         </Paper>
      </div>
  )
}

export default EntryList;