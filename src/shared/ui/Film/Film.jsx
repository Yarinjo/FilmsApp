import PropTypes from "prop-types";
import Heart from '/src/assets/icons/heart.svg'

export const Film = ({ film }) => {
	const handleUnFavorite = () => {
		console.log('handleUnFavorite');
	}
	return (
		<div className="film">
			<img className="filmImage" src={film.image} alt={film.title} />
			<div className="lowerSection">
			<p className="title">{film.title}</p>
			<span className="year-genre">{film.year} | {film.genre}</span>
			</div>
			{film.isFavorited && <div className="like" onClick={handleUnFavorite}><img src={Heart} alt="like" /> </div> }
		</div>
	);
};

Film.propTypes = {
	film: PropTypes.object,
};
