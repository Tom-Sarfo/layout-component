export default function Asset({ assetProperties }) {
	const { name, category, price, rating } = assetProperties;

	return (
		<div>
			<h1>The name of user is: {name}</h1>
			<br />
			<div>
				<p>category: {category}</p>
				<p>Price: {price}</p>
				<p>Rating: {rating}</p>
			</div>
		</div>
	);
}
