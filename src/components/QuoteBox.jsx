import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons'

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <>
    <section className="quoteBox">
        
        <article className="quoteBox__phrase" >
          <p>{phrase}</p>
        </article>
        <div className="button">
          <button className="quoteBox__btn" onClick={handleChangeQuote} >
             <FontAwesomeIcon icon={faArrowsRotate}
          /></button>
        </div>
        
    </section>

 
    </>       
  )
}

export default QuoteBox