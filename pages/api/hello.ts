import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
  ok : boolean;
  message : string;
  method : string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(process.env)
  res.status(200).json(
    { 
        ok : true ,
        message : 'Correcto!',
        method : req.method || 'No hay metodo'
    }
  )
}
