import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function FormInput({ onSubmit }) {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const nameInputId = nanoid();
	const telInputId = nanoid();

	const submitForm = (e) => {
		e.preventDefault();

		onSubmit(name, number);
	};

	const handleChange = (e) => {
		switch (e.target.name) {
			case 'name':
				setName(e.target.value);
				break;
			case 'number':
				setNumber(e.target.value);
				break;
			default:
				return;
		}
	};

	return (
		<form action="" className="formInput" onSubmit={submitForm}>
			<label htmlFor={nameInputId}>
				<p className="formInputTitle">Name</p>

				<input
					id={nameInputId}
					name="name"
					className="inputField"
					type="text"
					value={name}
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
					required
					onChange={handleChange}
				/>
			</label>
			<label htmlFor={telInputId}></label>
			<p className="formInputTitle">Number</p>
			<input
				id={telInputId}
				type="number"
				className="inputField"
				name="number"
				value={number}
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
				required
				onChange={handleChange}
			/>

			<button className="submitButton">Add contacts</button>
		</form>
	);
}
