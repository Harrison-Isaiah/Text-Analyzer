import React, {useState} from "react";

export default function TextFrom(props) {  
    const handleUpClick = () => {
      let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
      }
      const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
      }
      const handleClearClick = () => {
        let newText = '';
        props.showAlert("Text cleared", "success");
        setText(newText);
      }
      const handleOnChange = (event) => {
        setText(event.target.value)
      }
      
      const handleCopyClick=()=>{
       
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copyed", "success");
    }    
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);// here using Reguler Expressions
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed", "success");
    }    
  
  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    
      <h1 className="mb-2">{props.heading} </h1>
      <div className="mb-3">
     <textarea className="form-control" onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#001028':'white',color: props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8" ></textarea>
      </div>

      <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-2 my-1">Convert to Upercase</button>
      <button disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
      <button disabled={text.length===0} onClick={handleClearClick} className="btn btn-primary mx-1 my-1">Clear text</button>
      <button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Extra Spaces</button>
      <button disabled={text.length===0} onClick={handleCopyClick} className="btn btn-primary mx-1 my-1">Copy text</button>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.length}  Mintues read</p>

      <h1>Preview</h1>
        <p>{text.length>0?text:'Nothing to preview here'}</p>
        
     
    </div>

    
    </>
  );
}


//Reguler Expressions

// let reg = /harry/;
// reg = /harry/g;     // g means global
// reg = /harry/i;     // i means insensitive Case

// console.log(reg);
// console.log(reg.source);

// let s = "harry this is a string to Learn RE, RE are used to find match For Ex HarRy finding harry in this sentence "

//  Functions to match expressions
// 1. exec() - this Function returns an arry fot the match or null for no match 




// let result = reg.exec(s); //1
// console.log(result);
// result = reg.exec(s);     //2
// console.log(result);
// result = reg.exec(s);     //3
// console.log(result);
// // console.log(result);