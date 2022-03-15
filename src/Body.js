/** @format */

import React, { useState, useEffect, useRef } from 'react';

export default function Body() {
	const [listReact, setListReact] = useState([
		{ name: 'Linh', age: 22, type: 'react' },
		{ name: 'Huy', age: 20, type: 'react' },
		{ name: 'Long', age: 21, type: 'react' },
	]);
	const [listJava, setListJava] = useState([
		{ name: 'Hoang', age: 22, type: 'java' },
		{ name: 'Quan', age: 20, type: 'java' },
		{ name: 'Phuc', age: 21, type: 'java' },
	]);

	const [tenMoi, setTenMoi] = useState('');
	const [tuoiMoi, setTuoiMoi] = useState(0);
	const [lopMoi, setLopMoi] = useState('react');
	const tranferItem = function (ten, tuoi, lop) {
		if (lop === 'react') {
			const javaNew = {
				name: ten,
				age: tuoi,
				type: 'java',
			};
			setListJava([...listJava, javaNew]);
			for (let i = 0; i < listReact.length; i++) {
				if (listReact[i].name === ten) {
					listReact.splice(i, 1);
				}
			}
		}
		if (lop === 'java') {
			const reactNew = {
				name: ten,
				age: tuoi,
				type: 'react',
			};
			setListReact([...listReact, reactNew]);
			for (let i = 0; i < listJava.length; i++) {
				if (listJava[i].name === ten) {
					listJava.splice(i, 1);
				}
			}
		}
	};

	const getValueName = async (e) => {
		await setTenMoi(e.target.value);
	};
	const getValueAge = (e) => {
		setTuoiMoi(e.target.value);
	};
	const getValueClass = (e) => {
		setLopMoi(e.target.value);
	};

	const AddMember = function (e) {
		if (lopMoi === 'react') {
			const react = {
				name: tenMoi,
				age: tuoiMoi,
				type: lopMoi,
			};
			setListReact([...listReact, react]);
		}
		if (lopMoi === 'java') {
			const java = {
				name: tenMoi,
				age: tuoiMoi,
				type: lopMoi,
			};
			setListJava([...listJava, java]);
		}
		setTenMoi('');
		setTuoiMoi(0);
		setLopMoi('react');
	};
	const inputFocusRef = useRef();
	const FillData = function (ten, tuoi, lop) {
		document.getElementById('Add_Update').innerHTML = 'Cập nhật User';
		setTenMoi(ten);
		setTuoiMoi(tuoi);
		setLopMoi(lop);
		inputFocusRef.current.focus();
	};
	const UpdateData = function (index, lop) {
		document.getElementById('Add_Update').innerHTML = 'Thêm User';
		console.log(index);

		if (lop === 'react') {
			if (lopMoi === 'react') {
				for (let i = 0; i < listReact.length; i++) {
					if (i === index) {
						listReact[i].name = tenMoi;
						listReact[i].age = tuoiMoi;
					}
				}
			} else {
				for (let i = 0; i < listReact.length; i++) {
					if (i === index) {
						listReact.splice(i, 1);
					}
				}
				const java = {
					name: tenMoi,
					age: tuoiMoi,
					type: lopMoi,
				};
				setListJava([...listJava, java]);
			}
		}
		if (lop === 'java') {
			if (lopMoi === 'java') {
				for (let i = 0; i < listJava.length; i++) {
					if (i === index) {
						listJava[i].name = tenMoi;
						listJava[i].age = tuoiMoi;
						console.log(listJava[i]);
					}
				}
			} else {
				for (let i = 0; i < listJava.length; i++) {
					if (i === index) {
						listJava.splice(i, 1);
					}
				}
				const react = {
					name: tenMoi,
					age: tuoiMoi,
					type: lopMoi,
				};
				setListReact([...listReact, react]);
			}
		}
		console.log(lop, tenMoi, tuoiMoi, lopMoi);
		setTenMoi('');
		setTuoiMoi(0);
		setLopMoi('react');
	};
	const SORT = {
		up: 2,
		down: 3,
		no: 1,
	};
	const [sortAge, setSortAge] = useState(SORT.up);
	const getSortAge = () => {
		if (sortAge === SORT.no) {
			return 'NO';
		}
		if (sortAge === SORT.up) {
			return 'UP';
		}
		return 'DOWN';
	};
	const handleSort = () => {
		if (sortAge === SORT.down) {
			setSortAge(SORT.no);
		} else {
			if (sortAge === SORT.no) {
				setSortAge(SORT.up);
			} else {
				if (sortAge === SORT.up) {
					setSortAge(SORT.down);
				}
			}
		}
	};

	const [searchName, setSearchName] = useState();
	const [searchName2, setSearchName2] = useState();
	const findName = function (list) {
		let res = [...list];
		if (searchName) {
			res = res.filter((el) => el.name.includes(searchName));
		}
		if (sortAge !== SORT.NO) {
			res.sort((a, b) => {
				if (sortAge === SORT.up) {
					return parseInt(a.age) - parseInt(b.age);
				}
				if (sortAge === SORT.down) {
					return parseInt(b.age) - parseInt(a.age);
				}
			});
		}
		return res;
	};
	const findName2 = function (list) {
		let res2 = [...list];
		if (searchName2) {
			res2 = res2.filter((el) => el.name.includes(searchName2));
		}
		if (sortAge !== SORT.NO) {
			res2.sort((a, b) => {
				if (sortAge === SORT.up) {
					return parseInt(a.age) - parseInt(b.age);
				}
				if (sortAge === SORT.down) {
					return parseInt(b.age) - parseInt(a.age);
				}
			});
		}
		return res2;
	};

	const XoaUser = (list, ten, lop) => {
		if (lop === 'react') {
			for (let i = 0; i < list.length; i++) {
				if (list[i].name === ten) {
					list.splice(i, 1);
					console.log(list);
				}
			}
			setListReact([...listReact]);
		} else {
			for (let i = 0; i < list.length; i++) {
				if (list[i].name === ten) {
					list.splice(i, 1);
					console.log(list);
				}
			}
			setListJava([...listJava]);
		}
	};
	useEffect(() => {
		if (listJava.length === 0) {
			alert('Lớp Java không còn sinh viên');
		}
		if (listReact.length === 0) {
			alert('Lớp React không còn sinh viên');
		}
		//  saveData();
	}, [listJava.length, listReact.length]);
	return (
		<div>
			<h2>list member of React class</h2>
			<div className='timKiem'>
				Tìm kiếm:{' '}
				<input
					type='text'
					id='timKiemTheoTen'
					value={searchName}
					placeholder='Tim kiem theo ten'
					onChange={(e) => {
						setSearchName(e.target.value);
					}}
				/>
			</div>
			<div className='sapXep'>
				<button onClick={handleSort}>
					Sắp Xếp Theo Tuổi {getSortAge()}
				</button>
			</div>

			{listReact.length > 0 ? (
				<ul>
					{findName(listReact).map((item, index) => {
						return (
							<div>
								<li key={index}>
									name: {item.name} - age: {item.age}
									<button
										onClick={() => {
											tranferItem(item.name, item.age, item.type);
										}}>
										Tranfer
									</button>
									<button
										onClick={() => {
											FillData(item.name, item.age, item.type);
										}}>
										Edit
									</button>
									<button
										onClick={() => {
											UpdateData(index, item.type);
										}}>
										Update User
									</button>
									<button
										onClick={() => {
											XoaUser(listReact, item.name, item.type);
										}}>
										Xóa
									</button>
								</li>
							</div>
						);
					})}
				</ul>
			) : (
				'Lớp React trống'
			)}

			<h2>list member of Java class</h2>
			<div className='timKiem'>
				Tìm kiếm:{' '}
				<input
					type='text'
					name=''
					id=''
					placeholder='Tim kiem theo ten'
					value={searchName2}
					onChange={(e) => setSearchName2(e.target.value)}
				/>
			</div>
			<div className='sapXep'>
				<button onClick={handleSort}>
					Sắp Xếp Theo Tuổi: {getSortAge()}
				</button>
			</div>
			{listJava.length > 0 ? (
				<ul>
					{findName2(listJava).map((item, index) => {
						return (
							<li key={index}>
								name: {item.name} - age: {item.age}
								<button
									onClick={() => {
										tranferItem(item.name, item.age, item.type);
									}}>
									Tranfer
								</button>
								<button
									onClick={() => {
										FillData(item.name, item.age, item.type);
									}}>
									Edit
								</button>
								<button
									onClick={() => {
										UpdateData(index, item.type);
									}}>
									Update User
								</button>
								<button
									onClick={() => {
										XoaUser(listJava, item.name, item.type);
									}}>
									Xóa
								</button>
							</li>
						);
					})}
				</ul>
			) : (
				'Lớp Java không có ai'
			)}
			<h2 id='Add_Update'>Thêm thành viên mới</h2>
			<form>
				Tên :{' '}
				<input
					type='text'
					value={tenMoi}
					onChange={getValueName}
					ref={inputFocusRef}
				/>
				Tuổi :{' '}
				<input type='number' value={tuoiMoi} onChange={getValueAge} />
				<select value={lopMoi} onChange={getValueClass}>
					<option value='react'>React</option>
					<option value='java'>Java</option>
				</select>
			</form>
			<button className='addMember' onClick={AddMember}>
				Add Member
			</button>
		</div>
	);
}
