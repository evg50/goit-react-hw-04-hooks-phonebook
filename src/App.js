import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import FormInput from './components/FormInput';

const useLocalStorage = (key, defaultValue) => {
	const [state, setState] = useState(() => {
		return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
	});

	useEffect(() => {
		window.localStorage.setItem('contacts', JSON.stringify(state));
	}, [state, setState]);

	return [state, setState];
};

function App() {
	const [filter, setFilter] = useState('');
	const [contacts, setContacts] = useLocalStorage('contacts', []);

	const deleteContact = (e) => {
		setContacts(contacts.filter((contact) => contact.id !== e));
	};
	function formSubmitHeandler(name, number) {
		console.log(name, number);
		const newContact = {
			name,
			number,
		};
		newContact.id = nanoid();
		setContacts(() => [...contacts, newContact]);
	}
	const filterHandler = (filter) => {
		console.log(filter.target.value);
		setFilter(filter.target.value.toLowerCase());
	};
	const filterVisible = () => {
		return contacts.filter((contact) =>
			contact.name.toLowerCase().includes(filter)
		);
	};
	// console.log(filterVisible());
	return (
		<div className="App">
			<p className="title">Phonebook</p>
			<FormInput onSubmit={formSubmitHeandler} />
			<p className="title">Contacts</p>
			<Filter onChange={filterHandler} valueFilter={filter} />
			<Contacts contactList={filterVisible()} onDeleteContact={deleteContact} />
		</div>
	);
}
export default App;
