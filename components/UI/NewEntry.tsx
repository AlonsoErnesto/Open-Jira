import { ChangeEvent, useState, useContext } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/UI';


const NewEntry = () => {
   
   const { addNewEntry } = useContext(EntriesContext);
   const { setIsAddingEntry,isAddingEntry } = useContext(UIContext);

   const [isAdding, setIsAdding] = useState(false);
   const [inputValue, setInputValue] = useState('');
   const [touched, setTouched] = useState(false);

   const onTextFieldChanged = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
   };

   const onSave = () => {
      if ( !inputValue ) return ;
      addNewEntry(inputValue);
      setIsAddingEntry(false);
      setTouched(false);
      setInputValue('');
   }

  return (
   <Box sx={{marginBottom:2, paddingX:2}}>
      { isAddingEntry ? (
         <>
            <Button
               startIcon={<AddCircleIcon/>}
               fullWidth
               variant='outlined'
            >
               Agregar tarea
            </Button>
            <TextField 
               fullWidth 
               sx={{marginTop:2,marginBottom:1}} 
               placeholder='Nueva entrada' 
               autoFocus multiline 
               label="Nueva Entrada" 

               helperText={inputValue.length === 0 && touched && "Ingrese un valor."}
               onBlur={()=>setTouched(true)}
               error={inputValue.length === 0 && touched}
               value={inputValue}
               onChange={onTextFieldChanged}
            />
            <Box display='flex' justifyContent='space-between'>
               <Button 
                  variant='text' 
                  color='secondary'
                  onClick={()=>setIsAddingEntry(false)}
                  >
                  Cancelar
               </Button>
               <Button 
                  variant='outlined' 
                  color='secondary'
                  endIcon={<SaveOutlinedIcon/>}
                  onClick={()=>onSave()}
                  >
                  Guardar
               </Button>
            </Box>
         </>
      ) : (
         <Button 
            startIcon={<AddCircleIcon/>}
            fullWidth
            variant='outlined'
            onClick={()=>setIsAddingEntry(true)}
         >
            Agregar tarea
         </Button>
      )}      
   </Box>
  )
}

export default NewEntry;