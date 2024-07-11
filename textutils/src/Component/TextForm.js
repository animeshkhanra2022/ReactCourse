import React, {useState} from 'react'



export default function TextForm(props) {

  const handleUpClicked = () => {
    // console.log("uppercase clicked "+ Text);
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlart('Converted to Upper Case','success');
  }

  const handleLoClicked = () => {
    // console.log("uppercase clicked "+ Text);
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlart('Converted to Lower Case','success');
  }

  const handleClearClicked = () => {
    // console.log("uppercase clicked "+ Text);
    let newText = ("");
    setText(newText);
    props.showAlart('All Cleared','success');
  }

  const handleExtraSpace = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlart('Remove exstra Space','success');
  }

  const handleCopy = () => {
    var text = document.getElementById('exampleFormControlTextarea1');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlart('Copied on clipedbord', 'success');
  }

  const handleOnChange = (event) => {
    // console.log("Onchange");
    setText(event.target.value)

  }

  const [Text, setText] = useState('');

  return (
    <>
      <div className="container"  style={{color : props.mode==='dark'?'white': 'black'}} >

        <form>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Text Area</label>
            <textarea className="form-control" value = {Text} onChange = {handleOnChange} style={{backgroundColor : props.mode==='dark'?'#160838': 'light', color : props.mode==='dark'?'white': 'black'}} id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
            <button type="submit" className="btn btn-primary mx-4" onClick={handleUpClicked}>Convert to Uppercase</button>
            <button type="submit" className="btn btn-primary mx-4" onClick={handleLoClicked}>Convert to Lowercase</button>
            <button type="submit" className="btn btn-primary mx-4" onClick={handleClearClicked}>CLEAR</button>
            <button type="submit" className="btn btn-primary mx-4" onClick={handleCopy}>Copy</button>
            <button type="submit" className="btn btn-primary mx-4" onClick={handleExtraSpace}>Remove Extra Space</button>
        </form>
      </div>
      <div className="container my-3" style={{color : props.mode==='dark'?'white': 'black'}} >
        <h2>Your text Summery </h2>
        <p>{Text.split(" ").length} words and {Text.length}characters</p>
        <p>{0.0008 * Text.split(" ").length} Minuts reads</p>
        <h3>Preview</h3>
        <p>{Text.length>0? Text: "Enter something to view here"}</p>
      </div>
      

    </>

  )
}
