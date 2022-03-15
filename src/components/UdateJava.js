/** @format */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUserJava } from './DataJavaSlice';
import { AddUserReact } from './DataReactSlice';

export default function UdateJava() {
	const param = useParams();
	const listJava = useSelector((state) =>
		state.dataJavaList.find((list) => list.name === param.javaName),
	);
	const [tenMoi, setTenMoi] = useState(listJava.name);
	const [tuoiMoi, setTuoiMoi] = useState(listJava.age);
	const [lopMoi, setLopMoi] = useState(listJava.type);
	const getValueName = (e) => {
		setTenMoi(e.target.value);
	};
	const getValueAge = (e) => {
		setTuoiMoi(e.target.value);
	};
	const getValueClass = (e) => {
		setLopMoi(e.target.value);
	};
	const dispath = useDispatch();
	const navigate = useNavigate();
	const UpdateJava = (tuoiMoi, lopMoi) => {
		if (lopMoi === 'Java') {
			dispath(updateUserJava({ name: param.javaName, tuoiMoi, lopMoi }));
		} else {
			dispath(updateUserJava({ name: param.javaName, tuoiMoi, lopMoi }));
			dispath(AddUserReact(tenMoi, tuoiMoi, lopMoi));
		}
		navigate(`/java`);
	};
	return (
		<div>
			<h1>Update User</h1>
			<form>
				Tên :{' '}
				<input
					type='text'
					value={tenMoi}
					onChange={getValueName}
					disabled
				/>
				Tuổi :{' '}
				<input type='number' value={tuoiMoi} onChange={getValueAge} />
				<select value={lopMoi} onChange={getValueClass}>
					<option value='react'>React</option>
					<option value='java'>Java</option>
				</select>
			</form>
			<button
				className='addMember'
				onClick={() => {
					UpdateJava(tuoiMoi, lopMoi);
				}}>
				Update
			</button>
		</div>
	);
}
