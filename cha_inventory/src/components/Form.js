import React, { useState } from 'react';
import Button from './Button';

function Form(prop) {
	const [itemInput, setItemInput] = useState('');

	const inputHandler = (e) => {
		setItemInput(e.target.value);
	};
	return (
		<form
			onSubmit={() => {
				prop.clickHandler(itemInput);
			}}
		>
			<input onChange={inputHandler} value={itemInput} required />
			<Button
				btnName={prop.btnNameValue}
				clickHandler={prop.clickHandler}
				itemInput={itemInput}
				type={'form'}
			/>
		</form>
	);
}

export default Form;
