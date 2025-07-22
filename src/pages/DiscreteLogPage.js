// DiscreteLogPage.js
import { useState } from 'react'
import { Box, TextField, Button, Divider, Alert, CircularProgress, Typography } from '@mui/material'
import { Navbar, Title, Subtitle, ThemedBoxContainer, Footer } from '../components/'
import { buildApiUrl, API_ENDPOINTS } from '../constants/api.js'

const CalculatorForm = () => {
    const [formData, setFormData] = useState({
        g: '',
        h: '',
        p: '',
        k: '',
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        // Clear error when user starts typing
        if (error) setError('')
        if (success) setSuccess(false)
    }

    const validateInputs = () => {
        const { g, h, p } = formData;
        
        if (!g || !h || !p) {
            setError('Please fill in all fields (g, h, p)')
            return false
        }
        
        // Check if inputs are valid numbers
        const gNum = parseInt(g, 10)
        const hNum = parseInt(h, 10)
        const pNum = parseInt(p, 10)
        
        if (isNaN(gNum) || isNaN(hNum) || isNaN(pNum)) {
            setError('Please enter valid integers for g, h, and p')
            return false
        }
        
        if (gNum <= 0 || hNum <= 0 || pNum <= 1) {
            setError('Values must be positive integers, and p must be greater than 1')
            return false
        }
        
        return true
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        if (!validateInputs()) {
            return
        }

        setLoading(true)
        setError('')
        setSuccess(false)

        try {
            const apiUrl = buildApiUrl(`${API_ENDPOINTS.DISCRETE_LOG}?g=${formData.g}&h=${formData.h}&p=${formData.p}`)
            const response = await fetch(apiUrl)
            
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Calculator service is not available. Please try again later.')
                } else if (response.status >= 500) {
                    throw new Error('Server error. Please try again later.')
                } else {
                    throw new Error(`Request failed: ${response.statusText}`)
                }
            }
            
            const text = await response.text()
            
            setFormData({
                g: formData.g,
                h: formData.h,
                p: formData.p,
                k: text.trim(),
            })
            setSuccess(true)
            
        } catch (error) {
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                setError('Unable to connect to the calculator service. Please check if the service is running or try again later.')
            } else {
                setError(error.message || 'An unexpected error occurred. Please try again.')
            }
            
            // Clear the result field on error
            setFormData(prev => ({ ...prev, k: '' }))
        } finally {
            setLoading(false)
        }
    }

    return (
        <ThemedBoxContainer>
            <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                sx={{ 
                    pt: { xs: 7, sm: 10 }, 
                    pb: { xs: 1, sm: 2 },
                    width: { xs: '100%', sm: 600, md: 700 },
                    maxWidth: '100%'
                }}
            >
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}
                
                {success && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        Calculation completed successfully!
                    </Alert>
                )}

                <TextField
                    name='g'
                    label='g (base)'
                    variant='outlined'
                    value={formData.g}
                    onChange={handleChange}
                    fullWidth
                    margin='normal'
                    disabled={loading}
                    helperText="Enter a positive integer"
                />
                <TextField
                    name='h'
                    label='h (result)'
                    variant='outlined'
                    value={formData.h}
                    onChange={handleChange}
                    fullWidth
                    margin='normal'
                    disabled={loading}
                    helperText="Enter a positive integer"
                />
                <TextField
                    name='p'
                    label='p (modulus)'
                    variant='outlined'
                    value={formData.p}
                    onChange={handleChange}
                    fullWidth
                    margin='normal'
                    disabled={loading}
                    helperText="Enter a prime number > 1"
                />
                
                <Box sx={{ mt: 2, mb: 2, position: 'relative' }}>
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary"
                        disabled={loading}
                        fullWidth
                    >
                        {loading ? 'Calculating...' : 'Calculate Discrete Logarithm'}
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>

                <TextField
                    name='k'
                    label='k (discrete logarithm result)'
                    variant='outlined'
                    value={formData.k}
                    fullWidth
                    margin='normal'
                    InputProps={{
                        readOnly: true,
                    }}
                    helperText={formData.k ? "This is the discrete logarithm value" : "Result will appear here after calculation"}
                />
                
                {formData.k && (
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="body2" color="text.secondary">
                            Verification: {formData.g}^{formData.k} ≡ {formData.h} (mod {formData.p})
                        </Typography>
                    </Box>
                )}
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
