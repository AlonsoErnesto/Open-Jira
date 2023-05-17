import { Box } from '@mui/material';
import Head from 'next/head';
import {Navbar,Sidebar} from '../UI';

interface Props {
   title : string;
   children? : React.ReactNode
}


const Layout:React.FC<Props> = ({title='Open-Jira', children}) => {
  return (
      <Box sx={{ flexFlow:1 }}>
         <Head>
            <title>{title}</title>
         </Head>
         {/* NAVBAR  */}
         <Navbar/>
         {/* SIDEBAR */}
         <Sidebar/>
         <Box sx={{padding:'10px 20px'}}>
            {children}
         </Box>
      </Box>
  )
}

export default Layout;