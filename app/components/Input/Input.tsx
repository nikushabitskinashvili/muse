import styles from "./Input.module.scss";
import React, { useState } from 'react';

const Input: React.FC = () => {

    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            <div className={   styles.container}>
                <img src={'/images/search.png'} alt="search" className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search albom"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </div>

    );
};

export default Input;
