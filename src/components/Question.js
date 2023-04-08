import React from 'react';
export default function Question ({ qst, awr }) {
	return (
		<details> 
			<summary>
				{qst}
			</summary>
				{awr}
		</details>
	)
}
