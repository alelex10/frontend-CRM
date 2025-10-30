
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CircularProgress,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

const ContactsList = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedContact, setSelectedContact] = useState<any | null>(null);
  const navigate = useNavigate();

  
  //  Cargar contactos desde el backend
  
  useEffect(() => {
    const fetchContacts = async () => {
      try {
       
        const response = await fetch("https://tu-");/////// anexar bdd
        if (!response.ok) throw new Error("Error al obtener los contactos");

        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);


  //  Diálogo de confirmación
 
  const handleOpenDialog = (contact: any) => {
    setSelectedContact(contact);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedContact(null);
  };

  
  //  Eliminar contacto

  const handleDelete = async () => {
    if (!selectedContact) return;
    try {
    
      const response = await fetch(
        `https`,/// anexar bdd
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Error al eliminar el contacto");

      // Actualizar lista local
      setContacts((prev) =>
        prev.filter((contact) => contact.id !== selectedContact.id)
      );
    } catch (error) {
      console.error(error);
    } finally {
      handleCloseDialog();
    }
  };

  
  //  Editar contacto
  
  const handleEdit = (id: string) => {
    navigate(`/contacts/edit/${id}`);
  };

 
  //  Renderizado
  
  if (loading) return <CircularProgress sx={{ mt: 5 }} />;

  return (
    <>
      <Typography variant="h4" sx={{ mb: 3, mt: 3 }}>
        Lista de Contactos
      </Typography>

      {contacts.length === 0 ? (
        <Typography>No hay contactos disponibles.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Empresa</TableCell> {/* Nueva columna */}
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>{contact.nombre}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.telefono}</TableCell>
                  <TableCell>{contact.empresa?.name || "—"}</TableCell>{" "}
                  {/* Mostrar empresa */}
                  <TableCell align="right">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(contact.id)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleOpenDialog(contact)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

    
      {/*  Diálogo de confirmación */}

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Eliminar contacto</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Seguro que deseas eliminar a{" "}
            <strong>{selectedContact?.nombre}</strong>? Esta acción no se puede
            deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="inherit">
            Cancelar
          </Button>
          <Button onClick={handleDelete} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactsList;
