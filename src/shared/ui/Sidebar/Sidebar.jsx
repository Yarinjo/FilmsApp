import { Link } from "react-router-dom"
import { LogoIcon } from "../../icons/Logo/LogoIcon"

import HomePicture from '/src/assets/icons/film.svg'
import HeartPicture from '/src/assets/icons/heart.svg'
import TrendingPicture from '/src/assets/icons/trending-up.svg'
import CalendarPicture from '/src/assets/icons/calendar.svg'

import UserPicture from '/src/assets/icons/users.svg'
import MessagePicture from '/src/assets/icons/message-circle.svg'

import SettingPicture from '/src/assets/icons/sliders.svg'
import LogoutPicture from '/src/assets/icons/log-out.svg'




export const Sidebar = () => {
  return (
	<div className="sidebar">
		<LogoIcon />
		<div className="mainSection">
			<div className="picture-link"><img src={HomePicture} alt="" /><Link to='/'>Home</Link></div>
			<div className="picture-link"><img src={HeartPicture} alt="" /><Link to='/'>Favourites</Link></div>
			<div className="picture-link"><img src={TrendingPicture} alt="" /><Link to='/trending'>Trending</Link></div>
			<div className="picture-link"><img src={CalendarPicture} alt="" /><Link to='/'>Coming soon</Link></div>
		</div>
		<div className="communitySection">
			<div className="picture-link"><img src={UserPicture} alt="" /><Link to='/'>Community</Link></div>
			<div className="picture-link"><img src={MessagePicture} alt="" /><Link to='/'>Social</Link></div>
		</div>
		<div className="settingsSection">
			<div className="picture-link"><img src={SettingPicture} alt="" /><Link to='/'>Settings</Link></div>
			<div className="picture-link"><img src={LogoutPicture} alt="" /><Link to='/'>Logout</Link></div>
		</div>
	</div>

  )
}
