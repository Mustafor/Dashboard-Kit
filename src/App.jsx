import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Oveview, Tickets, Ideas, Contacts, Agents, Articles } from './pages'

function App() {
  return (
    <>
    <div className='flex justify-between'>
      <Navbar/>
      <div className='w-[80%] px-[36px] py-[30px]'>
        <Header/>
        <Routes>
        <Route path='/' element={<Oveview/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='/ideas' element={<Ideas/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/articles' element={<Articles/>}/>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
