import React from "react"; // ¡Agrega esta línea!
import { render, screen } from "@testing-library/react";
import NavBar from "./nav-bar";
import '@testing-library/jest-dom'; // Añade esta línea


describe("suite <NavBar>", () => {
	it("should render", () => {
		render(<NavBar />);

		const element = screen.getByText(/OpbitCRM/i);

		expect(element).toBeInTheDocument();
	});
});


