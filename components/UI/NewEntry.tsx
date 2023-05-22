import { useState } from 'react';
import { Button, Box, TextField } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineOutlined'

const NewEntry = () => {

   const [isAdding, setIsAdding] = useState(false)

  return (
   <Box sx={{marginBottom:2, paddingX:2}}>
      { isAdding ? (
         <>
            <TextField 
               fullWidth 
               sx={{marginTop:2,marginBottom:1}} 
               placeholder='Nueva entrada' 
               autoFocus multiline 
               label="Nueva Entrada" 
               helperText="Ingrese un valor"
            />
            <Box display='flex' justifyContent='space-between'>
               <Button 
                  variant='text' 
                  color='secondary'
                  >
                  Cancelar
               </Button>
               <Button 
                  variant='outlined' 
                  color='secondary'
                  endIcon={<SaveOutlinedIcon/>}
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
            onClick={()=>setIsAdding(true)}
         >
            Agregar tarea
         </Button>
      )}      
   </Box>
  )
}

export default NewEntry;