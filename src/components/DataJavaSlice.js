/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = [
	{ name: 'Hoang', age: 22, type: 'java' },
	{ name: 'Quan', age: 20, type: 'java' },
	{ name: 'Phuc', age: 21, type: 'java' },
];
const dataJavas = createSlice({
	name: 'javas',
	initialState,
	reducers: {
		AddUserJava: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(name, age, type) {
				return {
					payload: {
						name,
						age,
						type,
					},
				};
			},
		},
		updateUserJava(state, action) {
			let { name, tuoiMoi, lopMoi } = action.payload;
			let arr = state.find((item) => item.name === name);
			if (arr) {
				if (lopMoi === 'java') {
					arr.age = tuoiMoi;
					arr.type = lopMoi;
				} else {
					for (let i = 0; i < state.length; i++) {
						if (state[i].name === name) {
							state.splice(i, 1);
						}
					}
				}
			}
		},
		deleteUserJava(state, action) {
			let { index } = action.payload;
			state.splice(index, 1);
		},
	},
});
export const { AddUserJava, deleteUserJava, updateUserJava } =
	dataJavas.actions;
export default dataJavas.reducer;
