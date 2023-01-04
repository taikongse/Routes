import { Button, Card, Container } from '@mui/material'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from './../Layout'
import Home from './../Pages/Home'
import ThaiPage from './../Pages/หน้าภาษาไทย'

import './App.scss'

const titleStyle = {
  fontFamily: 'Tahoma',
  fontSize: 20,
  fontWeight: 100,
}

class LinkItem {
  constructor(title, to, href) {
    this.title = title
    this.to = to
    this.href = href
  }
}

const links = [
  new LinkItem('Home', '/'),
  new LinkItem('หน้าภาษาไทย', '/หน้าภาษาไทย'),
  new LinkItem('Nowhere', '/Nowhere'), // ที่ที่ไม่มีเรา🥲 หมายถึง *ราวท์🫢
]

export default function App() {
  return (  <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout title='React Routes' links={links} />}>
            <Route index element={<Home />} /> { /* ราวท์ที่ถูกตั้งไว้เป็นห index*/ }
             <Route path="/หน้าภาษาไทย" element={<ThaiPage />} />
            <Route path="*" element={<div className="main container"><h1>Page not found 404</h1></div>} /> { /* ราวท์ที่รับทุกๆ อย่าง */ }
          </Route>
        </Routes>
      </BrowserRouter>
              )
}
