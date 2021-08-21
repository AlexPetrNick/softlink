import userPhoto from '../../image/userPhoto.jpg'
import { apiCabinet } from '../../apiDAL/DAL'
import ComputerContainer from './Computer/ComputerContainer'

let Cabinet = (props) => {

	let eraseItemSsd = (id) => {
		apiCabinet.eraseItemSsd(id)
		props.updateCabinetAC(true)
	}


	let eraseItemVideo = (id) => {
		apiCabinet.eraseItemVideo(id)
		props.updateCabinetAC(true)
	}

	let eraseItemHdd = (id) => {
		apiCabinet.eraseItemHdd(id)
		props.updateCabinetAC(true)
	}

	let eraseItemMother = (id) => {
		apiCabinet.eraseItemMother(id)
		props.updateCabinetAC(true)
	}

	let eraseItemPower = (id) => {
		apiCabinet.eraseItemPower(id)
		props.updateCabinetAC(true)
	}

	let eraseItemRam = (id) => {
		apiCabinet.eraseItemRam(id)
		props.updateCabinetAC(true)
	}

	let eraseItemCpu = (id) => {
		apiCabinet.eraseItemCpu(id)
        props.updateCabinetAC(true);
	}

    console.log("Draw Cabinet")
    let stateCab = props.stateCabinet
    let stateComp = props.stateComp
    let hard = stateCab.bag.hdd
    let cpu = stateCab.bag.cpu
    let mother = stateCab.bag.mother
    let power = stateCab.bag.powersupply
    let ssd = stateCab.bag.ssd
    let video = stateCab.bag.video
    let ram = stateCab.bag.ram
    let arrRam = stateComp.ram.map((data) => data.id)
    let ramSlot = {
        ddr3: stateComp.remainDdr3,
        ddr3L: stateComp.remainDdr3L,
        ddr4: stateComp.remainDdr4,
    }
    let arrHard = stateComp.hdd.map((data) => data.id)
    let arrVideo = stateComp.video.map((data) => data.id)
    let arrSsd = stateComp.ssd.map((data) => data.id)
    let ssdSlot = {
        m2: stateComp.remainM2,
        pcie: stateComp.remainPcie4,
        sata: stateComp.remainSata,
        msata: 0
    }

    let haveSlotSsd = (data) => {
        if (data == "SATA-III") {
            if (ssdSlot.sata) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        } else if (data == "M2") {
            if (ssdSlot.m2) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        } else if (data == "PCI-E 3.0 x4") {
            if (ssdSlot.pcie) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        }
    }

    let haveSlotRam = (data) => {
        if (data == "DDR3") {
            if (ramSlot.ddr3) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        } else if (data == "DDR3L") {
            if (ramSlot.ddr3L) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        } else if (data == "DDR4") {
            if (ramSlot.ddr4) {
                return <div className="button__item">&laquo;</div>
            } else {
                return <div className="button__item disable">X</div>
            }
        }
    }

    return (
        <div className="cabinet__wrapper">
            <div className="info__user">
                <div className="user__logo">
                    <img src={userPhoto} />
                </div>
                <div className="user__data">
                    <div className="user__login">{props.stateUser.login}</div>
                    <div className="user__firstname">{props.stateUser.firstName}</div>
                    <div className="user__second__name">{props.stateUser.secondName}</div>  
                </div>
            </div>
            <ComputerContainer />
            <div className="user__bug">
                <div className="bug__name">Материнка
                    {mother.map((data) => {
                            return(
                                <div className="bug__item">
                                    { 
                                        data.id == stateComp.mother[0].id ?
                                            <div className="button__item enable">&raquo;</div> :
                                            stateComp.remainMother ?
                                            <div className="button__item">&laquo;</div> :
                                            <div className="button__item disable">X</div>
                                    }
                                    <div className="bug__item__name">
                                        {data.model} {data.brand}
                                    </div>
                                    <div className="bug__item__disc">
                                        Описание Итема
                                    </div>
                                    {
                                        data.id == stateComp.mother[0].id ? 
                                        <div className="erase_item deleteCant" title="Нельзя удалить из кабинета пока итем в компьютере"><b>X</b></div>:
                                        <div className="erase_item" onClick={() => {eraseItemMother(data.id)}}><b>X</b></div>
                                    }
                                </div>
                            )
                        })}
                </div>
                <div className="bug__name">Процессор
                    {cpu.map((data) => {
                            return(
                                <div className="bug__item">
                                    { data.id == props.stateComp.cpu[0].id ?
                                            <div className="button__item enable">&raquo;</div> :
                                            stateComp.remainCpu ?
                                            <div className="button__item">&laquo;</div> :
                                            <div className="button__item disable">X</div>
                                    }
                                    <div className="bug__item__name">
                                        {data.model} {data.brand}
                                    </div>
                                    <div className="bug__item__disc">
                                        Описание Итема
                                    </div>
                                    {
                                        data.id == props.stateComp.cpu[0].id ? 
                                        <div className="erase_item deleteCant" title="Нельзя удалить из кабинета пока итем в компьютере"><b>X</b></div>:
                                        <div className="erase_item" onClick={() => {eraseItemCpu(data.id)}}><b>X</b></div>
                                    }
                                </div>
                            )
                        })}
                </div>
                <div className="bug__name">Блок питания
                    {power.map((data) => {
                        return( 
                            <div className="bug__item">
                                { data.id == props.stateComp.power[0].id ?
                                        <div className="button__item enable">&raquo;</div> :
                                        stateComp.remainPower ?
                                        <div className="button__item">&laquo;</div> :
                                        <div className="button__item disable">X</div>
                                }
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                    {
                                        data.id == props.stateComp.power[0].id ? 
                                        <div className="erase_item deleteCant" title="Нельзя удалить из кабинета пока итем в компьютере"><b>X</b></div>:
                                        <div className="erase_item" onClick={() => {eraseItemPower(data.id)}}><b>X</b></div>
                                    }
                            </div>
                        )
                    })}     
                </div>
                <div className="bug__name">Видеокарта
                    {video.map((data) => {
                        return(
                            <div className="bug__item">
                                    { arrVideo.some((item) => item == data.id) ?
                                            <div className="button__item enable">&raquo;</div> :
                                            stateComp.remainPcie16 ?
                                            <div className="button__item">&laquo;</div> :
                                            <div className="button__item disable">X</div>
                                    }
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                    {
                                        arrVideo.some((item) => item == data.id) ? 
                                        <div className="erase_item deleteCant" title="Нельзя удалить из кабинета пока итем в компьютере"><b>X</b></div>:
                                        <div className="erase_item" onClick={() => {eraseItemVideo(data.id)}}><b>X</b></div>
                                    }
                            </div>
                        )
                    })}        
                </div>
                <div className="bug__name">SSD
                    {ssd.map((data) => {
                        return(
                            <div className="bug__item">
                                { 
                                    arrSsd.some((item) => item == data.id) ?
                                        <div className="button__item enable">&raquo;</div> :
                                        haveSlotSsd(data.interface)
                                }
                                <div className="bug__item__name">
                                    {data.model} {data.brand} {data.interface}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                {
                                   arrSsd.some((item) => item == data.id) ? 
                                   <div className="erase_item deleteCant" title="Нельзя удалить из кабинета пока итем в компьютере"><b>X</b></div>:
                                   <div className="erase_item" onClick={() => {eraseItemSsd(data.id)}}><b>X</b></div>
                                }
                            </div>
                        )
                    })} 
                </div>
                <div className="bug__name">Оперативная
                    {ram.map((data) => {
                        return(
                            <div className="bug__item">
                                    { 
                                        arrRam.some((item) => item == data.id) ?
                                            <div className="button__item enable">&raquo;</div> :
                                            haveSlotRam(data.type_memory)
                                    }
                                <div className="bug__item__name">
                                    {data.model} {data.brand} {data.type_memory}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                    {
                                        arrRam.some((item) => item == data.id) ? 
                                        <div className="erase_item deleteCant" title="Нельзя удалить из кабинета пока итем в компьютере"><b>X</b></div>:
                                        <div className="erase_item" onClick={() => {eraseItemRam(data.id)}}><b>X</b></div>
                                    }
                            </div>
                        )
                    })}
                </div>
                <div className="bug__name">Жесткий
                    {hard.map((data) => {
                        return(
                            <div className="bug__item">                   
                                    { arrHard.some((item) => item == data.id) ?
                                        <div className="button__item enable">&raquo;</div> :
                                        <div className="button__item">&laquo;</div>
                                    }
                                <div className="bug__item__name">
                                    {data.model} {data.brand}
                                </div>
                                <div className="bug__item__disc">
                                    Описание Итема
                                </div>
                                    {
                                        arrHard.some((item) => item == data.id) ? 
                                        <div className="erase_item deleteCant" title="Нельзя удалить из кабинета пока итем в компьютере"><b>X</b></div>:
                                        <div className="erase_item" onClick={() => {eraseItemHdd(data.id)}}><b>X</b></div>
                                    }
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cabinet