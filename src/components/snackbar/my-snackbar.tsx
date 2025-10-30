import React, { Dispatch, SetStateAction } from 'react'
import { MySnackbar } from './my-snackbar-style'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import { Iconify } from '../icons/icon'

interface MySnackbarAlertProps {
    errorMessage: string | undefined,

    setError: Dispatch<SetStateAction<{
        message: string;
        type: "success" | "error";
    } | undefined>>
    variant?: 'error' | 'success' | 'warning' | 'info'
}

export const MySnackbarAlert = ({ errorMessage, setError, variant }: MySnackbarAlertProps) => {
    return (
        <div>
            <MySnackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={!!errorMessage}
                onClose={() => setError(undefined)}
                sx={{ width: "100%" }}
                message={
                    <Alert
                        action={
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={() => setError(undefined)}
                            >
                                <Iconify icon="eva:close-fill" />
                            </IconButton>
                        }
                        severity={variant}
                    >
                        {errorMessage}
                    </Alert>
                }
                autoHideDuration={6000}
            />
        </div>
    )
}
