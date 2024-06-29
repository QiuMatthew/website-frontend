// DiscreteLogPage.js
import { useState } from 'react'
import { Box, TextField, Button, Divider } from '@mui/material'
import { Navbar, Title, Subtitle, ThemedBoxContainer, Footer } from './components/'

const CalculatorForm = () => {
    const [formData, setFormData] = useState({
        g: '',
        h: '',
        p: '',
        k: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            //const response = await axios.post('/api/discrete-log', formData)
            const response = await fetch(`http://localhost:8080/discrete-log?g=${formData.g}&h=${formData.h}&p=${formData.p}`)
            const text = await response.text()

            setFormData({
                g: formData.g,
                h: formData.h,
                p: formData.p,
                k: text,
            })
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <ThemedBoxContainer>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                sx={{ pt: { xs: 7, sm: 10 }, pb: { xs: 1, sm: 2 } }}
            >
                <TextField
                    name='g'
                    label='g'
                    variant='outlined'
                    value={formData.g}
                    onChange={handleChange}
                    fullWidth
                    margin='normal'
                />
                <TextField
                    name='h'
                    label='h'
                    variant='outlined'
                    value={formData.h}
                    onChange={handleChange}
                    fullWidth
                    margin='normal'
                />
                <TextField
                    name='p'
                    label='p'
                    variant='outlined'
                    value={formData.p}
                    onChange={handleChange}
                    fullWidth
                    margin='normal'
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
                <TextField
                    name='k'
                    label='k'
                    variant='outlined'
                    value={formData.k}
                    onChange={handleChange}
                    fullWidth
                    margin='dense'
                    InputProps={{
                        readOnly: true,
                    }}
                />
            </Box>
        </ThemedBoxContainer>
    )
}

export default function DiscreteLogPage() {
    const navbarItems = [
        {
            text: 'Home',
            sectionID: 'home'
        },
        {
            text: 'Manual',
            sectionID: 'manual',
        },
        {
            text: 'Algorithm',
            sectionID: 'algorithm',
        },
    ]
    const subtitleList = [
        "We know that if g^k = h, then k is the logarithm of h with base g, this is defined under real numbers.",
        "If we redefine it in cyclic group Zp, it is called discrete logarithm.",
        "Our goal is, given g, h, and p, to find the smallest k such that g^k = h mod p.",
    ]

    return (
        <Box    // make sure the background color is expaned to entire viewport when content is not enough
            sx={{
                minHeight: '100vh',
                bgcolor: 'background.primary',
            }}
        >
            <Navbar navbarItems={navbarItems} />
            <Title titleText="Discrete Logarithm" titleTextColored="Calculator" />
            <Subtitle contentList={subtitleList} />
            <CalculatorForm />
            <Divider sx={{ pt: 6 }} />
            <Footer />
        </Box>
    )
}
