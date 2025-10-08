import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0)
	return (
		<div>
			<h1>Home</h1>
			<Link href="/about">About</Link>
		</div>
	);
}
