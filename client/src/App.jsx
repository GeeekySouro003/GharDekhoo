import { Suspense } from 'react';
import './App.css';
import Website from "./Pages/Website.jsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { LayoutGroup } from 'framer-motion';
import Layout from './Components/Layout/Layout.jsx';
import Properties from './Pages/Properties/Properties.jsx';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
function App()
{

  const queryClient = new QueryClient()

  return(
    <QueryClientProvider client={queryClient}>

   
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
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
   
  ); 
  
}
export default App;