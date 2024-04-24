import { Header } from "../../shared/ui/Header/Header";
import { Film } from "../../shared/ui/Film/Film";
import { films } from "../../database/films";
import StarPicture from "/src/assets/icons/star.svg";
import HeartPicture from '/src/assets/icons/heart.svg'
import { Modal } from "../../Components/Modal/Modal";
import { useState } from "react";



export const Trending = (props) => {
	const listItems = films.map((film) => <Film key={film.id} film={film} />);

	const [modal, setModal] = useState('PlaceForModal')
	
	function TheClick() {
		setModal('showModal')
	}

	return (
		<>
			<Header />
			<div className="trending">
				<div className="trending-title">Trending at this moment</div>
				<div className="trending-list">
					{listItems}
				</div>
			</div>
			<div className="main-trend">
				<div className="trendingPicture"><img src={films[1].image} alt="picture" /></div>
				<div className="trendingInfo">
					<div className="trendingFilmName">House of Wealth
						<div className="trendingRating"><img src={StarPicture} alt="star" />7.8/10</div>
					</div>
					<div className="trendingYearGenreTime">
						<span>2023</span>
						<span>Drama</span>
						<span>2h 38m</span>
					</div>
					<p className="trendingDescription">{films[3].description}</p>
					<div className="trendingButtons">
						<button className="watchNow">Watch now</button>
						<button className="addToFavourite" onClick={TheClick} > { modal === 'PlaceForModal' && <img src={HeartPicture} alt="Heart" />} {modal === !'showModal' &&<img src={HeartPicture} alt="Heart" />}{modal === 'showModal' && <Modal/>}</button>
					</div>
				</div>
				
				
				

			</div>
		</>
	);
};
