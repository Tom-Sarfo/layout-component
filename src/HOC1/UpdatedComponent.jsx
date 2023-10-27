import { useState } from "react";
function UpdatedComponent(OriginalComponent) {
	function NewComponent() {
		const [money, setMoney] = useState(30);
		function handleIncrement() {
			setMoney((money) => money * 2);
		}
        return <OriginalComponent handleIncrement={handleIncrement} money={money}/>;
	}
	return NewComponent;
}

export default UpdatedComponent;
