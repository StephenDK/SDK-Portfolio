import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import axios from "axios";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trimStart() });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "Please enter your first name";
    } else if (formData.firstName.length > 50) {
      newErrors.firstName = "First name must be 50 characters or less";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Please enter your last name";
    } else if (formData.lastName.length > 50) {
      newErrors.lastName = "Last name must be 50 characters or less";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please use a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
      };
      // Replace '/api/messages' with your actual API endpoint
      await axios.post(
        "http://localhost:8080/api/v1/message/new-message",
        payload
      );
      setIsSubmitted(true);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrors({
          submit: "Email already exists. Please use a different email.",
        });
      } else {
        setErrors({ submit: "An error occurred. Please try again." });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <motion.div initial="hidden" animate="visible" variants={formVariants}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "text.primary",
            }}
          >
            Send a Message
          </Typography>
        </Box>

        {isSubmitted ? (
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "200px",
              borderRadius: 2,
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <CheckCircleIcon sx={{ color: "success.main", fontSize: 40 }} />
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontWeight: "medium",
                  color: "text.primary",
                }}
              >
                Thank you for reaching out. Once I receive your message, I will
                reach out as soon as possible.
              </Typography>
            </Box>
          </Paper>
        ) : (
          <Paper
            elevation={3}
            sx={{ p: { xs: 2, sm: 4 }, borderRadius: 2, width: "100%" }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={!!errors.lastName}
                    helperText={errors.lastName}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sx={{ width: "100%" }}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    required
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                {errors.submit && (
                  <Grid item xs={12} sx={{ width: "100%" }}>
                    <Alert severity="error">{errors.submit}</Alert>
                  </Grid>
                )}
                <Grid item xs={12} sx={{ textAlign: "center", width: "100%" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: "1rem",
                      borderRadius: 1,
                      width: "100%",
                    }}
                  >
                    {isSubmitting ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        )}
      </motion.div>
    </Container>
  );
};

export default ContactMeForm;
