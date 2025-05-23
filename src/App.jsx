import Navbar from './pages/Navbar'
import{BrowserRouter,Routes,Route}from "react-router-dom";
//import './App.css'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import { WatchListProvider } from './context/WatchListContext';

function App() {
  
  return (
    <WatchListProvider>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/watchList"element={<Watchlist/>}/>
    
   </Routes>
   </BrowserRouter>
   </WatchListProvider>
  )
}

export default App
