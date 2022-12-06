import React from 'react';

function Button(prop) {
	return (
		<div>
			{(prop.type === 'form' && (
				<button type='submit'>{prop.btnName}</button>
			)) || (
				<button
					onClick={() => {
						prop.clickHandler(prop.itemInput);
					}}
				>
					{prop.btnName}
				</button>
			)}
		</div>
	);
}

export default Button;
