import { useState } from 'react'
import './App.css'
import dbQuotes from './db/quote.json'
import { getRandom } from './utils/random'
import QuoteBox from './components/QuoteBox'



const bgImages = ["bg1","bg2","bg3","bg4"]

function App() {
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImage, setImage] = useState(getRandom(bgImages))


  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setImage(getRandom(bgImages))

  }
  console.log(quote)
  
  return (
    <main className={`app ${bgImage}`}>
      <section className="app__container">

        <h1 className="title">INFOGALAX </h1>
        
        <QuoteBox handleChangeQuote={handleChangeQuote} phrase={quote.phrase}/>
        <footer className="footers">
          <h3>Author: {quote.author}</h3>
        </footer>
        
        
      </section>
      
          <div className="circle"></div>
          <div className="half-circle"></div>
      
      
      
    </main>
  )
}

export default App
