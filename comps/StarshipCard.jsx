import '../src/index.css'

const StarshipCard = (props) => {

    return (
        <div className="StarshipCard-card">
            <h2>{props.name}</h2>
        </div>
    );
}

export default StarshipCard; 