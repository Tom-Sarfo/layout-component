import { LoadData } from "./LoadData";
import UserComponent from "./UserComponent'";

export default function IndexHOC() {
	const UserLoadData = LoadData(UserComponent);

	return (
		<div>
			<UserLoadData />
		</div>
	);
}
