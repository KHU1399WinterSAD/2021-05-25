import React, {useState} from 'react';
import styles from './App.module.scss';

function App() {
    const [count, setCount] = useState(1);
    
    const addToCount = (value: number) => {
        setCount(count + value);
    };
    
    return (
        <div className={styles['app']}>
            <header>
                <a href="#" className={styles['logo']}>Kharazmi Shop Center</a>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                    </ul>
                </nav>
                <a href="https://github.com/KHU1399WinterSAD" className={styles['github']} target="_blank">GitHub</a>
            </header>
            
            <main>
                <h1>Shop</h1>
            </main>
            
            <footer>
                2021 &copy; All rights are reserved
            </footer>
        </div>
    );
}

export default App;
