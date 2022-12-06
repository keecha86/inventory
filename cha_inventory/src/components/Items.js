import React, { useEffect, useState } from 'react';
import Button from './Button';
import Item from './Item';

function Items(props) {
	const [deleteItemIds, setDeleteItemIds] = useState([]);

	const deleteAllItems = () => {
		const response = props.apiRequest({ items: deleteItemIds });
		// if (response === 204) {
		// 	console.log('deleted');
		// } else {
		// 	console.error(`${response.status}`);
		// }
		props.setItems(
			props.items.filter((item) => !deleteItemIds.includes(item.id))
		);
		setDeleteItemIds([]);
		props.setItemsSelectionState('');
	};

	useEffect(() => {
		if (props.itemsSelectionState !== 'delete') {
			setDeleteItemIds([]);
		}
	}, [props.itemsSelectionState]);

	const setDeleteIds = (id) => {
		if (!deleteItemIds.includes(id)) {
			setDeleteItemIds([...deleteItemIds, id]);
		}
	};
	return (
		<div>
			{props.itemsSelectionState === 'delete' && (
				<Button btnName={'Delete All'} clickHandler={deleteAllItems} />
			)}
			{props.items.map((item) => (
				<Item
					item={item}
					key={item.id}
					setDeleteItemIds={setDeleteIds}
					deletedIds={deleteItemIds}
					itemsSelectionState={props.itemsSelectionState}
				/>
			))}
		</div>
	);
}

export default Items;
