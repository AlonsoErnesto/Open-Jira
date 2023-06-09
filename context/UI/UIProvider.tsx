import {useReducer } from 'react';
import { UIContext,uiReducer } from './';

interface UIProviderProps {
   children: React.ReactNode
}
export interface UIState {
   sidemenuOpen : boolean;
   isAddingEntry :boolean,
   isDragging : boolean,
};


const UI_INITIAL_STATE : UIState = {
   sidemenuOpen : false,
   isAddingEntry:false,
   isDragging:false
};


export const UIProvider:React.FC<UIProviderProps> = ({children}) => {

   const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

   const openSideMenu = () =>  dispatch({ type : 'UI - Open Sidebar' });

   const closeSideMenu = () => dispatch({ type : 'UI - Close Sidebar' });

   const setIsAddingEntry = (adding:boolean) => dispatch({type:'UI - newEntry',payload:adding});

   const startDragging = () => dispatch({type:'UI - Start-Dragging'});

   const endDragging = () => dispatch({type:'UI - End-Dragging'});

   
   return (
      <UIContext.Provider value={{
         // sidemenuOpen:state.sidemenuOpen,
         ...state,
         // Methods
         openSideMenu,
         closeSideMenu,
         // Methods - NewEntry
         setIsAddingEntry,
         // Methods - Drag and Drop
         endDragging,
         startDragging
      }}>
         {children}
      </UIContext.Provider>
   )
};