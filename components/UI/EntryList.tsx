import { useContext, useMemo } from 'react';
import { Paper, List} from '@mui/material';
import {EntryCard} from './';
import { EntryStatus } from '@/interface';
import { EntriesContext } from '@/context/entries';

interface Props {
   status : EntryStatus;
}

const EntryList:React.FC<Props> = ({status}) => {

   const { entries } = useContext(EntriesContext);
   const entriesByStatus = useMemo(()=> entries.filter(entry => entry.status === status), [entries]);

  return (
      <div>
         <Paper sx={{height:'calc(100vh)', overflow:'hidden', backgroundColor:'transparent', padding:2}}>
            {/* TODO: Cambiar si esta seleccionado para el drag */}
            <List sx={{opacity:1}}>
               {
                  entriesByStatus.map(entry => (
                     <EntryCard key={entry._id} entry={entry}/>
                  ))
               }
            </List>
         </Paper>
      </div>
  )
}

export default EntryList;