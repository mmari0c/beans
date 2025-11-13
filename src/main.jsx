import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './routes/Layout.jsx'
import CreateBean from './routes/CreateBean.jsx'
import BeanGallery from './routes/BeanGallery.jsx'
import DetailView from './routes/DetailView.jsx'
import EditBean from './routes/EditBean.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<App />} />
          <Route path='create-bean' element={<CreateBean/>} />
          <Route path='bean-gallery' element={<BeanGallery/>} />
          <Route path='bean/:id' element={<DetailView/>} />
          <Route path='edit-bean/:id' element={<EditBean/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
