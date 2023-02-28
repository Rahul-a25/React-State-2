import './input.css'

function Input({input,setinput}){
    return(
        <div className="inputcontainer">
          <textarea value={input} onChange={(ele)=>{
                const newValue = ele.currentTarget.value;
            setinput(newValue)
            {console.log(newValue)}
            
          }}></textarea>
        </div>
    )
}

export default Input
