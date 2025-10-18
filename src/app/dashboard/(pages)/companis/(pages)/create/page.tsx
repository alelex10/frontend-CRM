"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaCreateCompani, formTypeCreateCompani } from "../../../../../../schemas/company.schema";

function FormCompany() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<formTypeCreateCompani>({
		resolver: zodResolver(formSchemaCreateCompani),
		defaultValues: {
			name: "",
			industry: "",
			address: "",
		},
	});
	// const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	handleSubmit(()=>{});
	// 	console.log("ENVIANDO");
	// };
	const onAction = (data: FormData) => {
		handleSubmit(() => {});
		console.log(data);
	};

	return (
		<Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Contáctanos
			</Typography>

			<Box component="form" action={onAction} sx={{ mt: 2 }}>
				<TextField
					fullWidth
					label="Nombre"
					error={!!errors.name?.message}
					helperText={errors.name?.message}
					margin="normal"
					{...register("name")}
				/>

				<Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2 }}>
					Enviar Mensaje
				</Button>
			</Box>
		</Paper>
	);
}

export default FormCompany;

