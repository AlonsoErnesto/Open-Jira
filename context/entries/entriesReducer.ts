import { EntriesState } from './'
import { Entry } from '@/interface'

type EntriesActionType = 
| { type : '[Entry] Add-Entry', payload:Entry}
| { type : '[Entry] Update-updated', payload:Entry}

export const entriesReducer = (state:EntriesState, action:EntriesActionType):EntriesState => {
   switch ( action.type ) {
      case '[Entry] Add-Entry':
         return {
            ...state,
            entries : [...state.entries, action.payload],
         }
      case '[Entry] Update-updated':
         return {
            ...state,
            entries : state.entries.map(entry => {
               if ( entry._id === action.payload._id){
                  entry.status = action.payload.status;
                  entry.description = action.payload.description;
               }
               return entry;
            }),
         }
      default :
         return state;
   }
}