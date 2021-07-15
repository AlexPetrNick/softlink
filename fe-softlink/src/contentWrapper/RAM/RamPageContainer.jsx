import React, {Component} from 'react';
import ItemRam from "./RamItem/ItemRam";

class RamPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			url: "http://127.0.0.1:8000/api/ram/?format=json"
		};
	}

	componentDidMount() {
		fetch(this.state.url)
		.then(data => data.json())
		.then(data => this.setState({data}))
	}

	render() {
		const dataList = this.state.data
		let ItemList;
		if (dataList){
			ItemList = dataList.map((d) => {
				console.log(d.id)
				return (
				<ItemRam  
					brand={d.brand}
					model={d.model}
					type_memory={d.type_memory} 
					memory={d.memory}
					latency={d.latency}
				/>
				)
			})
		}
		return (
			<div className="wrapper__hard">
				<div className="content___list">
					<div className="page_content">
						{ItemList}
					</div>
					<div className="page__number__list">
						<div className="empty"></div>
							<ul className="page__slot">
								<li className="prev__page"><a href="#">Пред.</a></li>
								<li className="number__page"><a href="#">3</a></li>
								<li className="next__page"><a href="#">След.</a></li>
							</ul>
						<div className="empty"></div>
					</div>
				</div>

				<div className="filter__list">
					<form action="#" method="GET" id="filter__memory">
						<div className="filter__body">
							<div className="filter__item__title">Память</div>
								<div className="filter__item">
									<input id="check" type="checkbox" name="memory" value="12" /> 12
								</div>
						</div>
						<input type="submit" />
					</form>
					<form action="#" method="GET" id="filter__formfactor">
						<div className="filter__body">
							<div className="filter__item__title">Память</div>
								<div className="filter__item">
									<input type="checkbox" name="form_factor" value="12" /> 12
								</div>
						</div>
						<input type="submit" />
					</form>
				</div>
			</div>
		);
	}
}

export default RamPage