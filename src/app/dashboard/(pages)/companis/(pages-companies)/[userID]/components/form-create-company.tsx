"use client";
import {
    formSchemaCreateCompani,
    formTypeCreateCompani,
} from "@/schemas/company.schema";
import { Compani } from "@/types/compani.types";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

interface Props {
    compani: Compani;
}

export const FormCreateCompani = ({ compani }: Props) => {


    console.log(compani);
    const {
        register,
        // handleSubmit,
        formState: { errors },
    } = useForm<formTypeCreateCompani>({
        resolver: zodResolver(formSchemaCreateCompani),
        defaultValues: {
            name: compani?.name,
            industry: compani?.industry,
            address: compani?.address,
        },
    });

    //   if (loading) return <Loading />;
    return (
        <>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 500, mx: "auto" }}>
                {/* {status && (
                    <MySnackbarAlert
                        errorMessage={status.message}
                        setError={serStatus}
                        variant={status.type}
                    />
                )} */}
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
                    <Button
                        // disabled={loading}
                        type="submit"
                        fullWidth
                        variant="contained"
                        size="large"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Crear Empresa
                    </Button>
                </Box>
            </Paper>
        </>
    );
};
