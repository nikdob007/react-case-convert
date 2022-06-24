import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Convert Uppercase ", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Convert Lowercase ", "success");
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Clear ", "success");
    }
    const handleCapitalClick = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText);
        props.showAlert("Text Convert Capitalize ", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copying  ", "success");
    }
    const handleRemoveExSpaceClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Text Extra Space Remove ", "success");
    }
    const handleOnCHange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('');

  return (
    <>
        <div className='container' style={{ color: props.mode ==='dark' ? 'white' : 'black'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnCHange} style={{ backgroundColor: props.mode ==='dark' ? 'grey' : 'white',color: props.mode ==='dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-secondary me-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-warning me-2" onClick={handleCapitalClick}>Convert to Capitalize</button>
            <button className="btn btn-info me-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-info me-2" onClick={handleRemoveExSpaceClick}>Remove Extra Spaces</button>
            <button className="btn btn-success me-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{ color: props.mode ==='dark' ? 'white' : 'black'}}>
            <h2>Yout text summary</h2>
            <p><b>{text.split(/\s+/).filter((element) => { return element.length!==0}).length}</b> Words and <b>{text.length}</b> Characters</p>
            <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : 'Enter Something on above text area...'}</p>
        </div>
    </>
  )
}
