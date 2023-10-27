export default function LargePersonListItem({ people }) {
	const { name, age, hairColor, hobbies } = people;
	return (
		<>
			<h3>{name}</h3>
			<p>Age: {name} years</p>
			<p>Hair: {hairColor}</p>
			<h2>Hobbies: </h2>
			<ul>
				{hobbies.map((hobby) => (
					<li key={hobby}>{hobby}</li>
				))}
			</ul>
		</>
	);
}
