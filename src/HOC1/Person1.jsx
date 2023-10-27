function Person1({handleIncrement, money}) {
	return (
		<div>
			<div>
				<p>Person 1 bid price is {money} cedis</p>
				<button onClick={handleIncrement}>increase</button>
			</div>
		</div>
	);
}

export default Person1;
