import React from 'react';

function Item(prop) {
	return (
		<div
			onClick={() => {
				switch (prop.itemsSelectionState) {
					case 'show':
						break;
					case 'edit':
						break;
					case 'delete':
						prop.setDeleteItemIds(prop.item.id);
						break;
					default:
						break;
				}
			}}
		>
			{(prop.itemsSelectionState === 'edit' && (
				<div>
					<input placeholder={prop.item.item_name} />
					<input placeholder={prop.item.quantity} type='number' />
				</div>
			)) || (
				<div>
					<h3>{prop.item.item_name}</h3>
					<h3>{prop.item.quantity}</h3>
				</div>
			)}
		</div>
	);
}

export default Item;
