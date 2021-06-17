import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'IT IS REACT'
    },
    {
        title: 'Why use React?',
        content: 'COS IT BEST INNIT REACT'
    },
    {
        title: 'How to use React?',
        content: 'PROGRAM IN REACT'
    }
];

const options = [
    {
        label: "The Color Red",
        value: "red"
    },
    {
        label: "The Color Green",
        value: "Green"
    },
    {
        label: "The Color Blue",
        value: "Blue"
    },

];


const App = () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(false);

    
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <div className="ui segment">
                    <button className="ui button" onClick={()=>{setShowDropdown(!showDropdown)}} >Toggle Dropdown</button>
                    { showDropdown ?
                    <Dropdown label="Select a Color" options={options} selected={selected} onSelectChange={setSelected} />
                    : null }
                    <p style={{color: selected.value}}>This text is {selected.value}</p>
                </div>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}

export default App;
