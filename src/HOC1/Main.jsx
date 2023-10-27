import Person1 from "./person1";
import Person2 from "./person2";
import UpdatedComponent from "./UpdatedComponent";

function Main() {

	const Updated = UpdatedComponent(Person1);
	const Updated1 = UpdatedComponent(Person2);

	return (
		<div>
			{/* <Person1 /> */}
			<Updated/>
			<Updated1 />
		</div>
	);
}

export default Main;
