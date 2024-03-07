import { Suspense } from 'react';
import './App.css';
import Website from "./Pages/Website.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { LayoutGroup } from 'framer-motion';
function App()
{
  return(
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout />} >
      <Route path='/' element={<Website/>} />
      </Route>
      
    
    </Routes>
    </Suspense>
    
   
     
    </BrowserRouter>
   
  ); 
  
}
export default App;