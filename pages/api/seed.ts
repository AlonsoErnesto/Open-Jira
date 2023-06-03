import { NextApiRequest, NextApiResponse } from "next";
import { db } from '../../database';

type Data = {
    message : string;
}

export const handler = async (res:NextApiResponse<Data>,req:NextApiRequest) => {
    if(process.env.NODE_ENV === 'production')
    res.status(401).json({message:'No tienes permiso a este endpoint'});

    await db.connect();
    await db.disconnect();


    res.status(200).json({message:'Successful'})
}