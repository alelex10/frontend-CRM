"use client";

import Typography from "@mui/material/Typography";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <Typography variant="h4" component="h1" gutterBottom>
          ¡Algo ha fallado!
          <br />
          {error.message}
        </Typography>
        Volver a intentarlo
      </button>
    </div>
  );
}
