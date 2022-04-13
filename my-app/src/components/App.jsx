import React, {useState} from 'react';

function App() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleClick(event) {
        setText(name);
        event.preventDefault();
    }

    return (
        <div className="container">
            <h1>Welcome to WOW! {text}</h1>
            <form onSubmit={handleClick}>
                <input onChange = {handleChange} type="text" placeholder="What's your name?" value={name} />
                <button onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default App;