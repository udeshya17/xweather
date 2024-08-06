import styles from './Card.module.css';

function Card({heading, weatherData}) {
    return (
        <div className={styles.card}>
            <h3>{heading}</h3>
            <p>{weatherData}</p>
        </div>
    );
}

export default Card;
