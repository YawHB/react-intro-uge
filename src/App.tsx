import { useState } from 'react';
import './App.css';
import Profile from './components/Profile';
import { users } from './data/data';
import ListDemo from './exercises/ListDemo';
import EventDemo from './exercises/EventDemo';
import UserForm from './components/UserForm';
import FormUncontrolled from './exercises/FormUncontrolled';
import StateDemo1 from './exercises/StateDemo1';
import StateDemo2 from './exercises/StateDemo2';
import StateDemo3 from './exercises/StateDemo3';
import UseEffectDemo from './exercises/UseEffect';
import FetchDemo1 from './exercises/FetchDemo';
import FetchDemo from './exercises/FetchDemo';
import LiftingState from './exercises/LiftingState';
import ContextDemo from './exercises/ContextDemo';

export default function App() {
    const [selectedView, setSelectedView] = useState('info');

    function handleSelected(selected: string) {
        setSelectedView(selected);
    }

    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == 'info' ? <p>All exercises for React day-1</p> : null}
                        {selectedView == 'props demo' ? (
                            <>
                                {users.map((user) => {
                                    {
                                    }
                                    return <Profile key={user.id} id={user.id} name={user.name} email={user.email} isActive={user.isActive} singleLine={true}></Profile>;
                                })}
                            </>
                        ) : null}
                        {selectedView == 'List demo' ? (
                            <>
                                <ListDemo title="User List"></ListDemo>
                            </>
                        ) : null}
                        {selectedView == 'Events' ? (
                            <>
                                <EventDemo title={'Events'}></EventDemo>
                            </>
                        ) : null}
                        {selectedView == 'Uncontrolled form' ? (
                            <>
                                <FormUncontrolled title={'Forms uncontrolled'}></FormUncontrolled>
                            </>
                        ) : null}
                        {selectedView == 'State demo1' ? (
                            <>
                                <StateDemo1 title={'State demo1'}></StateDemo1>
                            </>
                        ) : null}
                        {selectedView == 'State demo2' ? (
                            <>
                                <StateDemo2 title={'State demo2'}></StateDemo2>
                            </>
                        ) : null}
                        {selectedView == 'State demo3' ? (
                            <>
                                <StateDemo3 title={'State demo3'}></StateDemo3>
                            </>
                        ) : null}
                        {selectedView == 'useEffect demo' ? (
                            <>
                                <UseEffectDemo title={'useEffect Demo'}></UseEffectDemo>
                            </>
                        ) : null}
                        {selectedView == 'Fetch demo' ? (
                            <>
                                <FetchDemo title={'Fetch Demo'}></FetchDemo>
                            </>
                        ) : null}
                        {selectedView == 'Lifting state' ? (
                            <>
                                <LiftingState title={'Lifting State'}></LiftingState>
                            </>
                        ) : null}
                        {selectedView == 'Context demo' ? (
                            <>
                                <ContextDemo title={'Lifting State'}></ContextDemo>
                            </>
                        ) : null}
                    </div>

                    {/**Add the exercise components you creskal ate for each exercise using the key you used for the matching button  */}
                </div>
            </div>
        </>
    );
}
type ButtonProps = {
    onSelected: (selected: string) => void;
    btnStyle?: string;
};

const Buttons = ({ onSelected, btnStyle }: ButtonProps) => {
    // const { onSelected: handleSelected, btnStyle: btnStyle } = props;

    return (
        <>
            <button className="btn-w100" onClick={() => onSelected('info')}>
                Info
            </button>
            {/* Add a new button for each of the exercises you complete */}
            <button className="btn-w100" onClick={() => onSelected('props demo')}>
                Props demo1
            </button>
            <button className="btn-w100" onClick={() => onSelected('List demo')}>
                List demo
            </button>
            <button className="btn-w100" onClick={() => onSelected('Events')}>
                Events
            </button>
            <button className="btn-w100" onClick={() => onSelected('Uncontrolled form')}>
                Forms uncontrolled
            </button>
            <button className="btn-w100" onClick={() => onSelected('State demo1')}>
                State demo1
            </button>
            <button className="btn-w100" onClick={() => onSelected('State demo2')}>
                State demo2
            </button>
            <button className="btn-w100" onClick={() => onSelected('State demo3')}>
                State demo3 (update array)
            </button>
            <button className="btn-w100" onClick={() => onSelected('useEffect demo')}>
                useEffect Demo
            </button>
            <button className="btn-w100" onClick={() => onSelected('Fetch demo')}>
                Fetch Demo
            </button>
            <button className="btn-w100" onClick={() => onSelected('Lifting state')}>
                Fetch Demo
            </button>
            <button className="btn-w100" onClick={() => onSelected('Context demo')}>
                Context Demo
            </button>
        </>
    );
};
