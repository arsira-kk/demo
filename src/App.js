import React, { useState } from 'react';
import './App.css';

const initialItems = [
    { type: 'Fruit', name: 'Apple' },
    { type: 'Vegetable', name: 'Broccoli' },
    { type: 'Vegetable', name: 'Mushroom' },
    { type: 'Fruit', name: 'Banana' },
    { type: 'Vegetable', name: 'Tomato' },
    { type: 'Fruit', name: 'Orange' },
    { type: 'Fruit', name: 'Mango' },
    { type: 'Fruit', name: 'Pineapple' },
    { type: 'Vegetable', name: 'Cucumber' },
    { type: 'Fruit', name: 'Watermelon' },
    { type: 'Vegetable', name: 'Carrot' },
];

const App = () => {
    const [mainList, setMainList] = useState(initialItems);
    const [fruits, setFruits] = useState([]);
    const [vegetables, setVegetables] = useState([]);

    const handleMoveToTypeColumn = (item) => {
        setMainList((prev) => prev.filter((i) => i.name !== item.name));

        if (item.type === 'Fruit') {
            setFruits((prev) => [...prev, item]);
            setTimeout(() => {
                setFruits((prev) => prev.filter((i) => i.name !== item.name));
                setMainList((prev) => {
                    if (!prev.some((i) => i.name === item.name)) {
                        return [...prev, item];
                    }
                    return prev;
                });
            }, 5000);
        } else if (item.type === 'Vegetable') {
            setVegetables((prev) => [...prev, item]);
            setTimeout(() => {
                setVegetables((prev) => prev.filter((i) => i.name !== item.name));
                setMainList((prev) => {
                    if (!prev.some((i) => i.name === item.name)) {
                        return [...prev, item];
                    }
                    return prev;
                });
            }, 5000);
        }
    };

    const handleMoveBackToMainList = (item) => {
        if (item.type === 'Fruit') {
            setFruits((prev) => prev.filter((i) => i.name !== item.name));
        } else if (item.type === 'Vegetable') {
            setVegetables((prev) => prev.filter((i) => i.name !== item.name));
        }
        setMainList((prev) => {
            if (!prev.some((i) => i.name === item.name)) {
                return [...prev, item];
            }
            return prev;
        });
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <div className="lists">
                <div className="list">
                    <h2>Main List</h2>
                    {mainList.map((item) => (
                        <button key={item.name} onClick={() => handleMoveToTypeColumn(item)} className="item-button">
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="list">
                    <h2>Fruits</h2>
                    {fruits.map((item) => (
                        <button key={item.name} onClick={() => handleMoveBackToMainList(item)} className="item-button">
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="list">
                    <h2>Vegetables</h2>
                    {vegetables.map((item) => (
                        <button key={item.name} onClick={() => handleMoveBackToMainList(item)} className="item-button">
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
