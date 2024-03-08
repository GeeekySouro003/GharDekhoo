import { Suspense } from 'react';
import './App.css';
import Website from "./Pages/Website.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { LayoutGroup } from 'framer-motion';
import Layout from './Components/Layout/Layout.jsx';
import Properties from './Pages/Properties/Properties.jsx';
function App()
{
  return(
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<Layout />} >
      <Route path='/' element={<Website/>} />
      <Route path='/properties' element={<Properties/>} />
      </Route>
      
    
    </Routes>
    </Suspense>
    
   
     
    </BrowserRouter>
   
  ); 
  
}
export default App;