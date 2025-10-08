import React from "react"; // ¡Agrega esta línea!
import { render, screen } from "@testing-library/react";
import NavBar from "./nav-bar";


describe("suite <NavBar>", () => {
	it("should render", () => {
		render(<NavBar />);

		const element = screen.getByRole("generic", { name: /OpbitCRM/i });

		expect(element).toBeInTheDocument();
	});
});


