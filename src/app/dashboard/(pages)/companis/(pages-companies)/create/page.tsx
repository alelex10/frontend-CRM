"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaCreateCompani, formTypeCreateCompani } from "../../../../../../schemas/company.schema";
import { createCompany } from "./actions";
import { useState, useTransition } from "react";
import { MySnackbarAlert } from "@/components/snackbar/my-snackbar";
import { C } from "vitest/dist/chunks/reporters.d.BFLkQcL6.js";

function FormCompany() {
	const [loading, setLoading] = useTransition()
	const [success, setSuccess] = useState<{ message: string, type: "success" | "error" } | undefined>();
	console.log("create companie")
	const {
		control,
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

	const onSubmit = (data: formTypeCreateCompani) => {
		setLoading(async () => {
			const response = await createCompany({ createData: data });
			if (response?.error) setSuccess({ message: response?.error.message, type: "error" });

			if (response?.data) setSuccess({ message: response?.data.message, type: "success" });
		});
	};
	return (

		<Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
			{success && (
				<MySnackbarAlert
					message={success.message}
					setError={setSuccess}
					variant={success.type}
				/>
			)}
			<Typography variant="h4" component="h1" gutterBottom>
				Crear Empresa
			</Typography>

			<Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 2 }}>
				<Controller
					name="name"
					control={control}
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							label="Nombre"
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							fullWidth
							margin="normal"
						/>
					)}
				/>
				<Controller
					name="industry"
					control={control}
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							label="Industria"
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							fullWidth
							margin="normal"
						/>
					)}
				/>
				<Controller
					name="address"
					control={control}
					render={({ field, fieldState }) => (
						<TextField
							{...field}
							label="Dirección"
							error={!!fieldState.error}
							helperText={fieldState.error?.message}
							fullWidth
							margin="normal"
						/>
					)}
				/>
				<Button disabled={loading}
					type="submit"
					fullWidth
					variant="contained"
					size="large"
					sx={{ mt: 3, mb: 2 }}>
					Enviar Mensaje
				</Button>
			</Box>
		</Paper>
	);
}

export default FormCompany;

