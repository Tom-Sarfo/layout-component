import { useEffect, useState } from "react";
export const LoadData = (MyComponent) => {
	return function Internal({ props }) {
		//implement code logic over here
		const [userData, setUserData] = useState({});

		async function fetchData() {
			const data = await fetch("https://jsonplaceholder.typicode.com/users");
			const result = await data.json();
			setUserData(result);
			console.log(result);
		}

		useEffect(() => {
			fetchData();
		}, []);

		return <MyComponent {...props} user={userData} />;
	};
};
