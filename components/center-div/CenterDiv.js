import { useEffect, useState } from 'react';
import styles from './style.module.css';
import axios from 'axios';

const CenterDiv = (props) => {
    const [data, setData] = useState();

    const fetchData = async () => {
        const data = await axios.get('http://localhost:3000/api/hello');
        console.log(data);
        setData(data.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.square}>
                <div className={styles.circle}>
                    {!data ? (<h2>Loading...</h2>) : (<h2>{data.name}</h2>)}
                </div>
            </div>
        </div>
    )
}

export default CenterDiv;