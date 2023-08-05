import React, { useState } from 'react';

export default function RmCalculator () {
	const [maxWeight, setMaxWeight] = useState(0);

	return (
		<div>
			<label> Максимальный вес подтягивания: 
				<input type="number" value={maxWeight} onChange={setMaxWeight}/>
			</label>
			<br />
			<label> 5RM: 
				<input type="number" readonly />
			</label>
		</div>
	)
}
