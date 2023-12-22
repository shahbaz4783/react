import { useState } from 'react';
import { Button } from './Button';

export const Props = () => {
	const [uiTab, setUiTab] = useState('Please Select a Tab');

	const selectHandler = (e) => {
		setUiTab(e);
	};
	return (
		<div>
			<menu>
				<Button label={'React'} onSelect={() => selectHandler('React')} />
				<Button label={'NodeJs'} onSelect={() => selectHandler('NodeJs')} />
				<Button
					label={'React Native'}
					onSelect={() => selectHandler('React Native')}
				/>
			</menu>
			<p>{uiTab}</p>
		</div>
	);
};
