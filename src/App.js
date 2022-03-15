/** @format */

import './App.css';
import Body from './Body';
import { Routes, Route, Link } from 'react-router-dom';
import ListReact from './components/ListReact';
import ListJava from './components/ListJava';
import AddMember from './components/AddMember.js';
import Update from './components/Update';
import UdateJava from './components/UdateJava';

function App() {
	return (
		<div className='app container-fluid'>
			<ul className='nav justify-content-center nav-tabs'>
				<li className='nav-item active'>
					<Link className='nav-link' to='/'>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/java'>
						Java
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/react'>
						React
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link' to='/addmember'>
						Add Member
					</Link>
				</li>
			</ul>

			<Routes>
				<Route path='/' element={<Body />}></Route>
				<Route path='/react' element={<ListReact />}></Route>
				<Route path='/react/:reactName' element={<Update />}></Route>
				<Route path='/java' element={<ListJava />}></Route>
				<Route path='/java/:javaName' element={<UdateJava />}></Route>
				<Route path='/addmember' element={<AddMember />}></Route>
			</Routes>
		</div>
	);
}

export default App;
