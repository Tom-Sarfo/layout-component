import UpdatedTagline from "./DisplayTagline";
import { dependencies } from "./Data";

export default function Main() {
	return (
		<div>
			<UpdatedTagline component={dependencies.Banner} />
			<UpdatedTagline component={dependencies.FirstDiscovery} />
		</div>
	);
}
