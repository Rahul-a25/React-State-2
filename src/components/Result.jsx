import './Result.css'
 import ReactMarkdown from 'react-markdown'

 
export default function Result({input,setinput}) {
  return (
   
    <div className='resultwala'>
        <ReactMarkdown>{input}</ReactMarkdown>
       
        </div>
  )
}