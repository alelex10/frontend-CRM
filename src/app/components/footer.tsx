import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";

export const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#f5f5f5", // Un color de fondo claro
				py: 4, // Padding vertical
				mt: "auto", // Empuja el footer hacia abajo si el contenido no lo llena todo
				boxShadow: "0 -2px 4px rgba(0,0,0,0.05)", // Sombra sutil superior
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						gap: 2,
					}}
				>
					<Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
						<Typography variant="h6" color="text.primary" gutterBottom>
							OrbitCRM
						</Typography>
						{/*<Typography variant="body2" color="text.secondary">
							© {new Date().getFullYear()} OrbitCRM. Todos los derechos reservados.
						</Typography>*/}
					</Box>

					<Box
						sx={{
							display: "flex",
							gap: 3,
							flexWrap: "wrap", // Permite que los enlaces se envuelvan en pantallas pequeñas
							justifyContent: { xs: "center", md: "flex-end" },
						}}
					>
						<Typography variant="body2" color="text.secondary">
							© {new Date().getFullYear()} OrbitCRM. Todos los derechos reservados.
						</Typography>
						{/*<Link href="/privacy-policy" passHref>
							<Typography variant="body2" color="text.secondary" sx={{ cursor: "pointer" }}>
								Política de Privacidad
							</Typography>
						</Link>
						<Link href="/terms-of-service" passHref>
							<Typography variant="body2" color="text.secondary" sx={{ cursor: "pointer" }}>
								Términos de Servicio
							</Typography>
						</Link>
						<Link href="/contact" passHref>
							<Typography variant="body2" color="text.secondary" sx={{ cursor: "pointer" }}>
								Contacto
							</Typography>
						</Link>*/}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};
