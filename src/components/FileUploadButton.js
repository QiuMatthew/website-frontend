import { Button, styled } from "@mui/material";
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
    const handleFileChange = (event) => {
        setFile(event.target.files[0])
    }
    const handleSubmit = async (event) => {
        const selectedFile = event.target.files[0]
        if (!selectedFile) {
            setMessage("Please select a file first")
            return
        }

        const formData = new FormData()
        formData.append('file', selectedFile)

        try {
            const response = await fetch("http://localhost:8080/upload", {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                const result = await response.text()
                setMessage(result)
            } else {
                setMessage("Failed to upload file.")
            }
        } catch (error) {
            setMessage('Error: ' + error.message)
        }
    }

    return (
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadRounded />}
        >
            Upload file
            <input type="file" hidden onChange={handleSubmit} />
            <VisuallyHiddenInput type="file" />
        </Button>
    );
}
