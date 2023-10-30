import useFetchData from "./useFetchData";

export default function Main() {
	let users = useFetchData("https://jsonplaceholder.typicode.com/posts/");

	const tom = users.map(user =><p key={user.userId}>{user.title}</p>)

	return (
		<>
			<div>
				{tom}
				thomas
			</div>
		</>
	);
}
