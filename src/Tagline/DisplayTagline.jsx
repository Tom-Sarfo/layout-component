export default function DisplayTagline({ component }) {
	// const { style, title, btnText} = dependencies
	return (
		<div className="CallToAction">
			<h3>{component[0].title}</h3>
			<button style={component[2]}>{component[1].btnText}</button>
		</div>
	);
}
