import React from "react";
import {NavLink, Route} from "react-router-dom";
import NewsPageContainer from './News/NewsPageContainer'
import NewDetailContainer from './News/NewDetailContainer'
import CabinetContainer from './Cabinet/CabinetContainer'
import ItemHardContainer from './ItemHard/ItemHardContainer'

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
			<Route path="/hardware/cpu" render={() => <ItemHardContainer itemType={0}/>}/>
			<Route path="/hardware/hdd" render={() => <ItemHardContainer itemType={7}/>}/>
			<Route path="/hardware/mother" render={() => <ItemHardContainer itemType={1}/>}/>
			<Route path="/hardware/ram" render={() => <ItemHardContainer itemType={3}/>}/>
			<Route path="/hardware/videocard" render={() => <ItemHardContainer itemType={4}/>}/>
			<Route path="/hardware/power" render={() => <ItemHardContainer itemType={5}/>}/>
			<Route path="/hardware/ssd" render={() => <ItemHardContainer itemType={6}/>}/>
			<Route path="/news" component={NewsPageContainer}/>
		</div>
		<div></div>
	</div>
);
}

export default ContentWrapper;