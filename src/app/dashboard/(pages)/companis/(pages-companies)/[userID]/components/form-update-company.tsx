"use client";
import { MySnackbarAlert } from "@/components/snackbar/my-snackbar";
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
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import Loading from "../../loading";

interface Props {
    compani: Compani;
}

export const FormUpdateCompani = ({ compani }: Props) => {
    // const [status, serStatus] = useState<{ message: string, type: "success" | "error" } | undefined>();
    const [loading, setLoading] = useTransition()

    const {

        control,
        formState: { errors },
    } = useForm<formTypeCreateCompani>({
        resolver: zodResolver(formSchemaCreateCompani),
        defaultValues: {
            name: compani?.name || "",
            industry: compani?.industry || "",
            address: compani?.address || "",
        },
    });

    if (loading) return <Loading />;
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
