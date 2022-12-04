import React from 'react'
import Button from './Button'
import Item from './Item'

function Items(props) {
	const deleteAllItems = () => {
		const response = props.apiRequest({ items: props.items })
		if (response === 204) {
			console.log('deleted')
		} else {
			console.error(`${response.status}`)
		}
	}
	return (
		<div>
			<Button btnName={'Delete All'} clickHandler={ deleteAllItems} />
			{props.items.map((item) => (<Item item={item} key={item.id} />))}
		</div>
		)
}

export default Items