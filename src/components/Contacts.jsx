import React from 'react';

export default function Contacts({ contactList, onDeleteContact }) {
	return (
		<>
			{contactList.map((el) => (
				<li key={el.id} onClick={() => onDeleteContact(el.id)}>
					{el.name}:{el.nubmer}
					<button name={el.id}>delete</button>
				</li>
			))}
		</>
	);
}
