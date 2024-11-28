import React from 'react'
import Home from '../components/Home'
import MainSection from '../components/main/MainSection'
import Footer from '../components/footer/Footer'
import Form from '../components/form/Form'
import TicketPurchase from '../components/TicketPurchase'
function HomePage() {
  return (
    <div>
    <Home />
    <MainSection />
    <TicketPurchase />
    <Form />
    <Footer />
      
    </div>
  )
}

export default HomePage
