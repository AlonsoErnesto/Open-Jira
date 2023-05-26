import { Entry } from "@/interface";
import { createContext } from "react";

interface ContextProps {
   entries : Entry[];
   updateEntry : (entry:Entry) => void;
   addNewEntry:(description:string)=> void ;

}


export const EntriesContext = createContext({}as ContextProps)