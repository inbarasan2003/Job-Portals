import { Toaster } from "sonner";
import Router from "./router";

export default function App(){
  return(
    <div>
     <Toaster position="top-right" richColors />
     <Router/>
    </div>
  )
}