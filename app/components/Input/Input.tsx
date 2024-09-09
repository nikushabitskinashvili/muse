import styles from "./Input.module.scss";
import React, { useState } from 'react';
import Image from "next/image";

const Input: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredResults, setFilteredResults] = useState<string[]>([]);

    const albumList = ["Abbey Road", "Back in Black", "Hotel California", "Dark Side of the Moon", "Rumours", "Sgt. Pepper", "Thriller", "The Wall", "Born to Run"];

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = event.target.value.toLowerCase();
        setInputValue(searchQuery);

        const filtered = albumList.filter(album => album.toLowerCase().startsWith(searchQuery));
        setFilteredResults(filtered);
    };

    return (
        <div className={styles.wrapper}>
            <div className={inputValue? styles.inputTyping : styles.container }>
                <Image src={'/images/search.png'} alt="search" className={styles.searchIcon} width={15} height={15} />
                <input
                    type="text"
                    placeholder="Search album"
                    value={inputValue}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            
            {inputValue && (
                <ul className={styles.results}>
                    {filteredResults.length > 0 ? (
                        filteredResults.map((album, index) => (
                            <li key={index} className={styles.resultItem}>{album}</li>
                        ))
                    ) : (
                        <li className={styles.noResults}>No results found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default Input;