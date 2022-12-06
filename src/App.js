import React, { useState } from 'react';
import ReactDOM from 'react-dom';
function Welcome(props) {
    // let a = 1;
    // let b = 9;
    // let c = a + b;
    // b +=a + b;
    // console.log(c, b);
    const [value, setValue] = useState();
    return <>
           <br/> {props.name} {value ? value.target.value : ''}
        <input type={'text'} onChange={setValue} />
    </>;
}
function App() {
    return (
        <div>
            <Welcome name="ФИО:" /> <br/>
            <Welcome name="Номер телефона:" /><br />
            <Welcome name="E-mail:" /><br />
            <Welcome name="Дата рождения:" /><br />
            <Welcome name="Биографические сведения:" /><br />
        </div>   
    );
}
export default Welcome; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
