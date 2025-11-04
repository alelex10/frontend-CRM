import React, { Dispatch, SetStateAction } from 'react'
import { MySnackbar } from './my-snackbar-style'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import { Iconify } from '../icons/icon'
import { Compani } from '@/types/compani.types'
import { ResponseError } from '@/types/response'

interface MySnackbarAlertProps {
    message: string | undefined,
    state?: Compani | undefined | ResponseError,
    setError?: Dispatch<SetStateAction<string | undefined>> | Dispatch<SetStateAction<{
        message: string;
        type: "success" | "error";
    } | undefined>>,
    variant?: 'error' | 'success' | 'warning' | 'info'
}

export const MySnackbarAlert = ({ message, setError, variant, state }: MySnackbarAlertProps) => {
    const [error, setErrorState] = React.useState<string | undefined>(message)

    React.useEffect(() => {
        if (message) {
            setErrorState(message)
        }
    }, [state])

    return (
        <div>
            <MySnackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={!!error}
                onClose={() => setErrorState(undefined)}
                sx={{ width: "100%" }}
                message={
                    <Alert
                        action={
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={() => setErrorState(undefined)}
                            >
                                <Iconify icon="eva:close-fill" />
                            </IconButton>
                        }
                        severity={variant}
                    >
                        {message}
                    </Alert>
                }
                autoHideDuration={6000}
            />
        </div>
    )
}
