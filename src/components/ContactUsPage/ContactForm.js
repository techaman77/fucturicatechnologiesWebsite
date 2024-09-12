import React from 'react'
import { Box, Grid2 as Grid, TextField, Button, Typography, Paper, Stack, Link } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Formik } from 'formik';

const ContactForm = () => {
    return (
        <>
            <Box className="p-5 flex justify-center items-center">
                <Paper elevation={3} square={false} className="w-full max-w-[1100px] p-8 flex justify-center items-center" sx={{ boxShadow: "0px 10px 16px 0px hsla(211, 100%, 50%, 0.12)" }}>
                    <Grid container spacing={14}>
                        {/* Form Section */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" className="font-semibold text-medium text-gray font-montserrat mb-5">
                                Leave us a message
                            </Typography>
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    message: '',
                                }}
                                // validationSchema={contactUsSchema}
                                onSubmit={(values, actions) => {
                                    try {
                                        //api call
                                        actions.resetForm();
                                        actions.setSubmitting = false;
                                    } catch (error) {
                                        alert("Error in submitting form");
                                        actions.setSubmitting = false;
                                    }
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    setValues,
                                    isSubmitting,
                                }) => (
                                    <form className="flex flex-col gap-6 mt-4">
                                        <Stack direction={"column"} gap={4}>
                                            <TextField
                                                fullWidth
                                                id="name"
                                                name="name"
                                                label="Name"
                                                variant='outlined'
                                                value={values?.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.name && Boolean(errors.name)}
                                                sx={{
                                                    backgroundColor: "white",
                                                    "& .MuiInputBase-input": {
                                                        fontFamily: "montserrat",
                                                        fontWeight: 600,
                                                        color: "primary",
                                                        paddingLeft: "8px",
                                                    },
                                                }}
                                                placeholder="Enter Full Name"
                                            />
                                            <TextField
                                                fullWidth
                                                id="email"
                                                name="email"
                                                label="Email"
                                                variant='outlined'
                                                value={values?.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.email && Boolean(errors.email)}
                                                sx={{
                                                    backgroundColor: "white",
                                                    "& .MuiInputBase-input": {
                                                        fontFamily: "montserrat",
                                                        fontWeight: 600,
                                                        color: "primary",
                                                        paddingLeft: "8px",
                                                    },
                                                }}
                                                placeholder="Enter Email"
                                            />
                                            <TextField
                                                fullWidth
                                                id="message"
                                                name="message"
                                                variant='outlined'
                                                multiline
                                                rows={4}
                                                value={values?.message}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={touched.message && Boolean(errors.message)}
                                                sx={{
                                                    backgroundColor: "white",
                                                    "& .MuiInputBase-input": {
                                                        fontFamily: "montserrat",
                                                        fontWeight: 600,
                                                        color: "primary",
                                                        paddingLeft: "8px",
                                                    },
                                                }}
                                                placeholder="Your message"
                                            />
                                            <Button variant="contained" color="primary" size="large"
                                                sx={{
                                                    fontFamily: "montserrat",
                                                    fontWeight: 600,
                                                    paddingLeft: "8px",
                                                    "&:hover": {
                                                        backgroundColor: "primary.light",
                                                    },
                                                }}
                                            >
                                                Send
                                            </Button>
                                        </Stack>
                                    </form>
                                )}
                            </Formik>
                        </Grid>

                        {/* Address Section */}
                        <Grid item xs={12} md={6} className="flex flex-col justify-center gap-4">
                            <Stack
                                direction="row"
                                gap={3}
                                alignItems="center"
                                sx={{ marginBottom: 2 }}
                            >
                                <LocationOnOutlinedIcon className="text-secondary" />
                                <Link
                                    href="https://www.google.co.in/maps/search/32%2FA+New+Alipore,+Kolkata+South,+Kolkata,+Nearby+Metro+Station,+Bus+Stand./@22.5230898,88.3221021,14.04z?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="none"
                                >
                                    <Typography
                                        fontWeight={600}
                                        fontFamily="montserrat"
                                        color={"gray"}
                                    >
                                        32/A New Alipore, Kolkata South, Kolkata,
                                        <br />
                                        Nearby Metro Station, Bus Stand.
                                    </Typography>
                                </Link>
                            </Stack>
                            <Stack
                                direction="row"
                                gap={3}
                                alignItems="center"
                                sx={{ marginBottom: 2 }}
                            >
                                <LocalPhoneOutlinedIcon className="text-secondary" />
                                <Link
                                    href="tel:+91 89620 68877"
                                    underline="none"
                                >
                                    <Typography
                                        fontWeight={600}
                                        fontFamily="montserrat"
                                        color={"gray"}
                                    >
                                        +91 89620 68877
                                    </Typography>
                                </Link>
                            </Stack>
                            <Stack
                                direction="row"
                                gap={3}
                                alignItems="center"
                                sx={{ marginBottom: 2 }}
                            >
                                <LocalPhoneOutlinedIcon className="text-secondary" />
                                <Link
                                    href="tel:+91 77488 35207"
                                    underline="none"
                                >
                                    <Typography
                                        fontWeight={600}
                                        fontFamily="montserrat"
                                        color={"gray"}
                                    >
                                        +91 77488 35207
                                    </Typography>
                                </Link>
                            </Stack>
                            <Stack
                                direction="row"
                                gap={3}
                                alignItems="center"
                                sx={{ marginBottom: 2 }}
                            >
                                <EmailOutlinedIcon className="text-secondary" />
                                <Link
                                    href="mailto:hr@fucturicatechnologies.com"
                                    underline="none"
                                >
                                    <Typography
                                        fontWeight={600}
                                        fontFamily="montserrat"
                                        color={"gray"}
                                    >
                                        hr@fucturicatechnologies.com
                                    </Typography>
                                </Link>
                            </Stack>
                            <Box className="w-full h-[200px] mt-5 rounded-md">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29483.96704382749!2d88.3221021!3d22.5230898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270ae18cc5e0d%3A0xaa8b9b5d97350f08!2sNew%20Alipur!5e0!3m2!1sen!2sin!4v1725989197523!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </>
    )
}

export default ContactForm