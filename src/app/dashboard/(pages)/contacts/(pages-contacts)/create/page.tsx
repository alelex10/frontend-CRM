"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchemaCreateCompani, formTypeCreateCompani } from "../../../../../../schemas/company.schema";
import { createContact } from "./actions";
import { Dispatch, SetStateAction, useEffect, useState, useTransition } from "react";
import { MySnackbarAlert } from "@/components/snackbar/my-snackbar";
import { formSchemaCreateContact, formTypeCreateContact } from "@/schemas/contact.schema";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import { getCompanies } from "../actions";
import { Compani } from "@/types/compani.types";



const getCompaniesList = async (
	setCompanies: Dispatch<SetStateAction<Compani[]>>) => {
	const response = await getCompanies();
	if (response?.data) setCompanies(response?.data?.data.data);
}

function FormContact() {
	const [loading, setLoading] = useTransition()
	const [success, setSuccess] = useState<{ message: string, type: "success" | "error" } | undefined>();
	const [company, setCompany] = useState<string>("select company");
	const [companies, setCompanies] = useState<Compani[]>([]);

	console.log("create contact")
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<formTypeCreateContact>({
		resolver: zodResolver(formSchemaCreateContact),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
		},
	});


	useEffect(() => {
		getCompaniesList(setCompanies);
	}, []);

	const onSubmit = (data: formTypeCreateContact) => {


		setLoading(async () => {
			const response = await createContact({ createData: data });
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
				Crear Contact
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
				<Controller name="email" control={control} render={({ field, fieldState }) => (
					<TextField
						{...field}
						label="Email"
						error={!!fieldState.error}
						helperText={fieldState.error?.message}
						fullWidth
						margin="normal"
					/>
				)} />
				<Controller name="phone" control={control} render={({ field, fieldState }) => (
					<TextField
						{...field}
						label="Telefono"
						error={!!fieldState.error}
						helperText={fieldState.error?.message}
						fullWidth
						margin="normal"
					/>
				)} />


				{/* <InputLabel id="demo-simple-select-label"> select company</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					value={company}
					label="Age"
					onChange={handleChange}
				>
					{companies.map((company) => (
						<MenuItem key={company.id} value={company.name}>
							{company.name}
						</MenuItem>
					))}
				</Select> */}
				<Button disabled={loading}
					type="submit"
					fullWidth
					variant="contained"
					size="large"
					sx={{ mt: 3, mb: 2 }}>
					Crear Contacto
				</Button>

			</Box>
		</Paper>
	);
}

export default FormContact;

