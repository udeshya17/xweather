import './Card.css';

function Card({heading, weatherData}) {
    return (
        <div className='weather-card'>
            <h3>{heading}</h3>
            <p>{weatherData}</p>
        </div>
    );
}

export default Card;
