"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaCreateCompani, formTypeCreateCompani } from "../../../../../../schemas/company.schema";
import { getCompany, updateCompany } from "./actions";
import { Compani, CreateCompani } from "@/types/compani.types";
import { useEffect, useState, useTransition } from "react";
import { MySnackbarAlert } from "@/components/snackbar/my-snackbar";

interface Props {
	params: Promise<{ update: string }>;
}

function FormCompany({ params }: Props) {
	const [loading, setLoading] = useTransition();
	const [success, setSuccess] = useState<{ message: string; type: "success" | "error" } | undefined>();
	const [compani, setCompani] = useState<Compani>();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<formTypeCreateCompani>({
		resolver: zodResolver(formSchemaCreateCompani),
		defaultValues: {
			name: compani?.name,
			industry: compani?.industry,
			address: compani?.address,
		},
	});

	// const onSubmit = (data: CreateCompani) => {
	// 	setLoading(async () => {
	// 		const response = await updateCompany({ createData: data, id: Number(update) });
	// 		if (response?.error) setSuccess({ message: response?.error.message, type: "error" });

	// 		if (response?.data) setSuccess({ message: response?.data.message, type: "success" });
	// 	});
	// };

	useEffect(() => {
		(async () => {
			const { update } = await params;
			const response = await getCompany({ id: Number(update) });
			console.log(response);
			if (response?.data) setCompani(response?.data.data);
		})();
	}, []);
	return (
		<Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
			{success && <MySnackbarAlert errorMessage={success.message} setError={setSuccess} variant={success.type} />}
			<Typography variant="h4" component="h1" gutterBottom>
				Crear Empresa
			</Typography>

			<Box component="form" sx={{ mt: 2 }}>
				<TextField
					fullWidth
					// sx={{ "& .MuiInputBase-root": { py: "calc(16px - 0.65em)", height: "1em" } }}
					label="Nombre"
					error={!!errors.name?.message}
					helperText={errors.name?.message}
					margin="normal"
					{...register("name")}
				/>
				<TextField
					fullWidth
					label="Industria"
					error={!!errors.industry?.message}
					helperText={errors.industry?.message}
					margin="normal"
					{...register("industry")}
				/>
				<TextField
					fullWidth
					label="Dirección"
					error={!!errors.address?.message}
					helperText={errors.address?.message}
					margin="normal"
					{...register("address")}
				/>
				<Button disabled={loading} type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2 }}>
					Enviar Mensaje
				</Button>
			</Box>
		</Paper>
	);
}

export default FormCompany;

