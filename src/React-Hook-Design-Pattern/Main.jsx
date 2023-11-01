import useFetchData from "./useFetchData";
import useToggle from "./useToggle";

export default function Main() {
	let users = useFetchData("https://jsonplaceholder.typicode.com/posts/");
	const [show, setShow] = useToggle();

	// const tom = users.map(user =><p key={user.userId}>{user.title}</p>)

	return (     
		<>
			<div>
				<button onClick={setShow}>show</button>
				{show && <p>show this message</p>}
			</div>
		</>
	);
}
