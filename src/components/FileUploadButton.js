import { Button, styled, Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { CloudUploadRounded } from "@mui/icons-material";

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default function FileUploadButton() {
    // support file upload
    const [file, setFile] = useState(null)
    const [message, setMessage] = useState('')
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [severity, setSeverity] = useState('success')
    
    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }
    const handleSubmit = async (event) => {
        const selectedFile = event.target.files[0]
        if (!selectedFile) {
            setMessage("Please select a file first")
            setSeverity('error')
            setOpenSnackbar(true)
            return
        }

        const formData = new FormData()
        formData.append('file', selectedFile)

        try {
            const response = await fetch("/api/slides/upload", {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                const result = await response.text()
                setMessage(result)
                setSeverity('success')
                setOpenSnackbar(true)
            } else {
                setMessage("Failed to upload file.")
                setSeverity('error')
                setOpenSnackbar(true)
            }
        } catch (error) {
            setMessage('Error: ' + error.message)
            setSeverity('error')
            setOpenSnackbar(true)
        }
    }
    
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false)
    }

    return (
        <>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadRounded />}
            >
                Upload file
                <input type="file" hidden onChange={handleSubmit} accept=".md" />
            </Button>
            <Snackbar 
                open={openSnackbar} 
                autoHideDuration={6000} 
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
}
