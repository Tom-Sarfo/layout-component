import "../App.css";
import RegularList from "./RegularList";
import SmallPersonListItem from "./People/SmallPersonListItem";
import LargePersonListItem from "./People/LargePersonListItem";
import Asset from "./asset";

const people = [
	{
		name: "John Doe",
		age: 26,
		hairColor: "brown",
		hobbies: ["swimming", "bicycling", "video gaming"],
	},
	{
		name: "John Doe",
		age: 26,
		hairColor: "brown",
		hobbies: ["swimming", "bicycling", "video gaming"],
	},
	{
		name: "John Doe",
		age: 26,
		hairColor: "brown",
		hobbies: ["swimming", "bicycling", "video gaming"],
	},
	{
		name: "John Doe",
		age: 26,
		hairColor: "brown",
		hobbies: ["swimming", "bicycling", "video gaming"],
	},
];

const asset = [
	{
		name: "Very good evil",
		category: "Movie",
		price: 234,
		rating: 34,
	},
	{
		name: "Very good evil",
		category: "Movie",
		price: 234,
		rating: 34,
	},
	{
		name: "Very good evil",
		category: "Movie",
		price: 234,
		rating: 34,
	},
];

function Index() {
	return (
		<>
			<RegularList
				items={people}
				resourceName="person"
				itemComponent={SmallPersonListItem}
			/>
			<RegularList
				items={asset}
				resourceName="assetProperties"
				itemComponent={Asset}
			/>
		</>
	);
}

export default Index;
