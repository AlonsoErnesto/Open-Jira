import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from "@/interface";
import { uiReducer } from "../UI";
import { EntriesContext,entriesReducer } from "./";


export interface EntriesState { 
   entries: Entry[];
}

interface EntriesProviderProps { 
   children : React.ReactNode;
}

const ENTRIES_INITIAL_STATES:EntriesState  = {
   entries: [
      {
         _id : uuidv4(),
         description : '1lorem daks ;ldak s;dl k;alsdkkj l;saj ;lksjd ah kjaghsdj hgaskjh gas',
         status:'pending',
         createdAt:Date.now(),
      },{
         _id : uuidv4(),
         description : '2lorem daks ;ldak s;dl k;alsdkkj l;saj ;lksjd ah kjaghsdj hgaskjh gas',
         status:'in-progress',
         createdAt:Date.now() - 1000000,
      },{
         _id : uuidv4(),
         description : '3lorem daks ;ldak s;dl k;alsdkkj l;saj ;lksjd ah kjaghsdj hgaskjh gas',
         status:'finished',
         createdAt:Date.now() - 100000,
      },
   ]
}

export const EntriesProvider:React.FC<EntriesProviderProps> = ({children}) => {

   const [ state, dispatch ] = useReducer(entriesReducer,ENTRIES_INITIAL_STATES)

   return (
      <EntriesContext.Provider value={{
         ...state  
      }}>
         {children}
      </EntriesContext.Provider>
   )
};

