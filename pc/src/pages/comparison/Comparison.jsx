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
				<th key={i.id} className="animation2" width="30%">{!subKey ? i[key] : i[key][subKey]}{unit}</th>
			))
		)
	}

	const tableBooleanContent = (key, subKey, isTrue, isFalse) => {
		return (
			compareDevices.map((i, index) => (
				(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
				<th key={i.id} className="animation2" width="30%">
					{!subKey ? (i[key] ? isTrue : isFalse) : (i[key][subKey] ? isTrue : isFalse)}
				</th>
			))
		)
	}

	return (
		<div >
			<Header />
			<div className="container">
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

				{compareDevices.length !== 0 &&
					<table width="90%" className="table tabel-fixed table-striped col-md-12 animation2">
						<thead >
							<tr width="90%">
								<th className=" table-dark" scope="col">ХАРАКТЕРИСТИКА </th>
								{compareDevices.map((i, index) => (
									(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
									<th className=" table-dark " key={i.id} ><div className="animation2">{i.name}</div></th>
								))}
							</tr>
						</thead>
						<tbody>
							<tr width="90%">
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
									<th className="animation2" key={i.id}>
										{
											i.SSD ? `SSD, ${i.storageVolume} ГБ` :
												`HDD, ${i.storageVolume} ГБ`
										}
									</th>
								))}
							</tr>
							<tr >
								<th>РАЗГОН</th>
								{tableBooleanContent("overclocking", null, "ЕСТЬ", "НЕТ")}
							</tr>
							<tr >
								<th className=" table-dark" colSpan={compareDevices.length + 1}>
									<span className="animation2">ПРОЦЕССОР:</span>
								</th>
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
								{tableBooleanContent("processor", "overclock", "СВОБОДНЫЙ", "ЗАБЛОКИРОВАН")}
							</tr>
							<tr>
								<th>ГРАФИЧЕСКОЕ ЯДРО</th>
								{tableBooleanContent("processor", "integratedVideoCard", "ЕСТЬ", "НЕТ")}
							</tr>
							<tr>
								<th>МОДЕЛЬ ГРАФИЧЕСКОГО ЯДРА</th>
								{compareDevices.map((i, index) => (
									(compareDeviceIndex1 === index || compareDeviceIndex2 === index) &&
									<th className="animation2" key={i.id}>
										{i.processor.integratedVideoCardName || "-"}
									</th>
								))}
							</tr>
							<tr>
								<th>TDP</th>
								{tableContent("processor", " Вт", "tdp")}
							</tr>
							<tr >
								<th className=" table-dark" colSpan={compareDevices.length + 1}>
									<span className="animation2">ВИДЕОКАРТА:</span>
								</th>
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
								{tableBooleanContent("videocard", "price", "ДИСКРЕТНАЯ", "ВСТРОЕННАЯ")}
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
								<th className=" table-dark" colSpan={compareDevices.length + 1}>
									<span className="animation2"> КОРПУС:</span>
								</th>
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
								{tableBooleanContent("computer_case", "RGB", "ЕСТЬ", "НЕТ")}
							</tr>
						</tbody>
					</table>}
			</div>
		</div>
	);
};

export default Comparison;