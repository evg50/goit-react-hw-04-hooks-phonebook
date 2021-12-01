import React from 'react';
import { nanoid } from 'nanoid';

function Filter({ valueFilter, onChange }) {
	//  const onChange = (e) => {
	//     console.log(e.currentTarget.value)
	//     // const {name , value} = e.currentTarget;
	//     // this.setState({ [name]: value });
	//     // this.setState()
	//   }
	const filterName = nanoid();

	return (
		<label htmlFor={filterName}>
			<p className="search-title"> Find contact by name</p>
			<input
				type="text"
				name="filter"
				id={filterName}
				className="inputField"
				placeholder="отфильтровать"
				value={valueFilter}
				onChange={onChange}
			/>
		</label>
	);
}

export default Filter;
