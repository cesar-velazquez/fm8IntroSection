import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {  

  return (
    <main className='bg-AlmostWhite min-h-screen font-Epilogue
    sm:max-w-[1200px] m-auto '> 
        <Header/>
        <Body/>
        <Footer/>
    </main>
  )
}

export default App
