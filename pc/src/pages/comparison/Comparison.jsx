<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import Header from '../../components/header/HeaderContainer'

import CompareCard from "./CompareCard";
const Comparison = ({
	compareDevices,
	setCompareDeviceIndext1,
	setCompareDeviceIndext2,
	removeDeviceFromCompareTurn,
	compareDeviceIndex1,
	compareDeviceIndex2,
}) => {


	const tableContent = (key, unit, subKey) => {
		return (
			compareDevices.map((i, index) => (
				(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
				<th key={i.id} className="animation">{!subKey ? i[key] : i[key][subKey]}{unit}</th>
			))
		)
	}


=======
import React from 'react';
import Header from '../../components/header/HeaderContainer'


const Comparison = () => {
>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
	return (
		<div >
			<Header />
			<div className="container">
<<<<<<< HEAD

				<h3>Сравнение</h3>
				<div className="compare-device__block shadow">
					<CompareCard
						compareDeviceIndex1={compareDeviceIndex1}
						compareDeviceIndex2={compareDeviceIndex2}
						setCompareDeviceIndext1={setCompareDeviceIndext1}
						setCompareDeviceIndext2={setCompareDeviceIndext2}
						compareDevicesQueue={compareDevices}
						removeDeviceFromCompareTurn={removeDeviceFromCompareTurn}
					/>
				</div>

				{compareDevices.length !== 0 && <table className="table table-striped col-md-12 animation">
					<thead >
						<tr>
							<th className=" table-dark" scope="col">ХАРАКТЕРИСТИКА </th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th className=" table-dark " key={i.id} ><div className="animation">{i.name}</div></th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr >
							<th >ЦЕНА</th>
							{tableContent("totalPrice", " РУБ")}
						</tr>
						<tr >
							<th >ОЗУ</th>
							{tableContent("RAM", " ГБ")}
						</tr>
						<tr >
							<th>НАКОПИТЕЛЬ</th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th key={i.id}>
									{
										i.SSD ? `SSD, ${i.storageVolume} ГБ` :
											`HDD, ${i.storageVolume} ГБ`
									}
								</th>
							))}
						</tr>
						<tr >
							<th>РАЗГОН</th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th key={i.id}>{i.overclocking ? "ЕСТЬ" : "НЕТ"} </th>
							))}
						</tr>
						<tr >
							<th className=" table-dark" colSpan={compareDevices.length + 1}>ПРОЦЕССОР:</th>
						</tr>
						<tr>
							<th>МОДЕЛЬ</th>
							{tableContent("processor", null, "name")}
						</tr>
						<tr>
							<th>ПРОИЗВОДИТЕЛЬ</th>
							{tableContent("processor", null, "brand")}
						</tr>
						<tr>
							<th >СОКЕТ</th>
							{tableContent("processor", null, "socket")}
						</tr>
						<tr>
							<th>ЯДЕР/ПОТОКОВ</th>
							{tableContent("processor", null, "coresThreads")}
						</tr>
						<tr>
							<th>ТЕХПРОЦЕСС</th>
							{tableContent("processor", null, "technicalProcess")}
						</tr>
						<tr>
							<th>ЧАСТОТА CPU</th>
							{tableContent("processor", " МГц", "frequency")}
						</tr>
						<tr>
							<th>ТИП ПАМЯТИ</th>
							{tableContent("processor", null, "memoryType")}
						</tr>
						<tr>
							<th>МНОЖИТЕЛЬ</th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th key={i.id}>
									{
										i.processor.overclock ?
											"СВОБОДНЫЙ" : "ЗАБЛОКИРОВАН"
									}
								</th>
							))}
						</tr>
						<tr>
							<th>ГРАФИЧЕСКОЕ ЯДРО</th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th key={i.id}>
									{
										i.processor.integratedVideoCard ?
											"ЕСТЬ" : "НЕТ"
									}
								</th>
							))}
						</tr>
						<tr>
							<th>МОДЕЛЬ ГРАФИЧЕСКОГО ЯДРА</th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th key={i.id}>
									{i.processor.integratedVideoCardName || "-"}
								</th>
							))}
						</tr>
						<tr>
							<th>TDP</th>
							{tableContent("processor", " Вт", "tdp")}
						</tr>
						<tr >
							<th className=" table-dark" colSpan={compareDevices.length + 1}>ВИДЕОКАРТА:</th>
						</tr>
						<tr>
							<th>НАЗВАНИЕ</th>
							{tableContent("videocard", null, "name")}
						</tr>
						<tr>
							<th>БРЕНД</th>
							{tableContent("videocard", null, "brand")}
						</tr>
						<tr>
							<th>ТИП</th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th key={i.id}>{i.videocard.price ? "ДИСКРЕТНАЯ" : "ВСТРОЕННАЯ"}</th>
							))}
						</tr>
						<tr>
							<th>ОБЪЕМ ПАМЯТИ</th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th key={i.id}>
									{i.videocard.memoryValue ? `${i.videocard.memoryValue} ГБ` : "ИСПОЛЬЗУЕТ ОЗУ"}
								</th>
							))}
						</tr>
						<tr>
							<th>ТИП ПАМЯТИ</th>
							{tableContent("videocard", null, "memoryType")}
						</tr>
						<tr>
							<th>ШИНА ПАМЯТИ</th>
							{tableContent("videocard", " бит", "memoryBus")}
						</tr>
						<tr>
							<th>ЧАСТОТА GPU</th>
							{tableContent("videocard", " МГц", "frequency")}
						</tr>
						<tr >
							<th className=" table-dark" colSpan={compareDevices.length + 1}>КОРПУС:</th>
						</tr>
						<tr>
							<th>НАЗВАНИЕ</th>
							{tableContent("computer_case", null, "name")}
						</tr>
						<tr>
							<th>МАТЕРИАЛЫ КОРПУСА</th>
							{tableContent("computer_case", null, "caseMaterials")}
						</tr>
						<tr>
							<th>РАЗМЕРЫ (ДЛИНА, ВЫСОТА, ШИРИНА) СМ</th>
							{tableContent("computer_case", null, "lengthHeightWidth")}
						</tr>
						<tr>
							<th>USB РАЗЪЕМЫ</th>
							{tableContent("computer_case", null, "USB")}
						</tr>
						<tr>
							<th>ПОДСВЕТКА</th>
							{compareDevices.map((i, index) => (
								(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
								<th key={i.id}>{i.computer_case.RGB ? "ЕСТЬ" : "НЕТ"}</th>
							))}
						</tr>
					</tbody>
				</table>}
			</div>
=======
				Сравнение
			</div>

>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
		</div>
	);
};

export default Comparison;