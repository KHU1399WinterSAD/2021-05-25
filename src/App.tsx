import React from 'react';
import styles from './App.module.scss';

function App() {
    const name = 'Reza';
    
    return (
        <div className={styles['app']}>
            <div className={styles['main-container']}>
                <h1>Hello, {name}!</h1>
            </div>
        </div>
    );
}

export default App;
