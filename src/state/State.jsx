import { useState } from "react";

export const State = () => {
	const [count, setCount] = useState(0);

	const counterHandler = () => {
		setCount(count + 1);
	};

	return (
		<>
			<section>
				<button onClick={counterHandler}>Click ME!!</button>
				<h1>{count}</h1>
			</section>
		</>
	);
};
