import React from "react";
import {NavLink, Route} from "react-router-dom";
import CpuContainer from './Cpu/CpuContainer'
import HddPageContainer from './Hdd/HddPageContainer'
import MotherPageContainer from './Mother/MotherPageContainer'
import RamPageContainer from "./RAM/RamPageContainer";
import VideoPageContainer from "./Video/VideoPageContainer";
import PowerContainer from './Power/PowerPageContainer'
import SsdPageContainet from './SSD/SsdPageContainer'
import NewsPageContainer from './News/NewsPageContainer'
import NewDetailContainer from './News/NewDetailContainer'
import CabinetContainer from './Cabinet/CabinetContainer'

const ContentWrapper = (props) => {
	return (
	<div className="content__wrapper">
		<div className="menu__wrapper">
			<div className="empty__menu"></div>
			<ul className="list__menu">
				<li className="news__menu"><NavLink className="text__menu" to="/news">Новости</NavLink></li>
				<li className="hardware__menu"><a href="#" className="text__menu">Железо</a>
						<div className="list__menu__hardware">
							<ul className="sub-list__menu__hardware">
								<li className="item__hardware"><NavLink to="/hardware/hdd">Жесткий диск</NavLink></li>
								<li className="item__hardware"><NavLink to="/hardware/cpu">Процессоры</NavLink></li>
								<li className="item__hardware"><NavLink to="/hardware/mother">Материнские платы</NavLink></li>
								<li className="item__hardware"><NavLink to="/hardware/ram">Оперативная память</NavLink></li>
								<li className="item__hardware"><NavLink to="/hardware/videocard">Видеокарты</NavLink></li>
								<li className="item__hardware"><NavLink to="/hardware/power">Блоки питания</NavLink></li>
								<li className="item__hardware"><NavLink to="/hardware/ssd">SSD</NavLink></li>
							</ul>
						</div>
				</li>	
				<li className="notebook__menu text__menu">Ноутбуки&otimes;</li>
				<li className="prog__menu text__menu">Программа&otimes;</li>
			</ul>
			<div className="empty__menu"></div>
		</div>
		<div></div>
		<div className="abstraktWrapper">
			<Route path="/cabinet" component={CabinetContainer} />	
			<Route path="/new/:newId" component={NewDetailContainer} />
			<Route path="/hardware/cpu" component={CpuContainer}/>
			<Route path="/hardware/hdd" component={HddPageContainer}/>
			<Route path="/hardware/mother" component={MotherPageContainer}/>
			<Route path="/hardware/ram" component={RamPageContainer}/>
			<Route path="/hardware/videocard" component={VideoPageContainer}/>
			<Route path="/hardware/power" component={PowerContainer}/>
			<Route path="/hardware/ssd" component={SsdPageContainet}/>
			<Route path="/news" component={NewsPageContainer} />
		</div>
		<div></div>
	</div>
);
}

export default ContentWrapper;