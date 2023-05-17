import Layout from "@/components/layouts/Layout";
import { Typography } from "@mui/material";
import type { NextPage } from 'next';

const HomePage : NextPage = () => {
  return (
    <Layout title="Open Jira">
      <Typography variant='h1' color="primary">
        Hola mundo
      </Typography>
    </Layout>
  )
}


export default HomePage;