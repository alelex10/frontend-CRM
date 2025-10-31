"use client";
import { MySnackbarAlert } from "@/components/snackbar/my-snackbar"
import { formSchemaCreateCompani, formTypeCreateCompani } from "@/schemas/company.schema"
import { Compani } from "@/types/compani.types"
import { zodResolver } from "@hookform/resolvers/zod"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { useEffect, useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { getCompany } from "../actions"
import Loading from "../../loading";


interface Props {
    userId: string;
}



export const FormCreateCompani = ({ userId }: Props) => {
    const [loading, setLoading] = useTransition();
    const [status, serStatus] = useState<{ message: string; type: "success" | "error" } | undefined>();
    const [compani, setCompani] = useState<Compani>();

    console.log("asdasdasdasdasdasd dsaasdasd asd")

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

    useEffect(() => {
        setLoading(async () => {
            const response = await getCompany({ id: userId });

            if (response?.data) {
                // setCompani(response?.data.data);
            }

            if (response?.error) serStatus({ message: response?.error.message, type: "error" });
        });
    }, []);

    if (loading) return <Loading />;
    return (
        <>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
                {status && <MySnackbarAlert errorMessage={status.message} setError={serStatus} variant={status.type} />}
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
                        Crear Empresa
                    </Button>
                </Box>
            </Paper>
        </>
    )
}
