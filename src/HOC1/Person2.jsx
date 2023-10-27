function Person2({ money, handleIncrement }) {
	return (
		<div>
			<div>
				<p>Person 2 bid price is {money} cedis</p>
				<button onClick={handleIncrement}>increase</button>
			</div>
		</div>
	);
}

export default Person2;
