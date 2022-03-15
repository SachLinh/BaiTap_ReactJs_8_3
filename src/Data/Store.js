/** @format */

import { configureStore } from '@reduxjs/toolkit';
import dataReactReducer from '../components/DataReactSlice';
import dataJavaReducer from '../components/DataJavaSlice';

export default configureStore({
	reducer: {
		dataReactList: dataReactReducer,
		dataJavaList: dataJavaReducer,
	},
});
