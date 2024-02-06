import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import { MenuItem } from '@mui/material';

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  price: yup.number().required('Price is required'),
  discountPercentage: yup.number().required('Discount percentage is required'),
  rating: yup.number().required('Rating is required'),
  stock: yup.number().required('Stock is required'),
  brand: yup.string().required('Brand is required'),
  category: yup.string().required('Category is required'),
  thumbnail: yup.string().required('Thumbnail is required'),
  images: yup.array().required('Images are required'),
});

const ProductForm = () => {
  const { id } = useParams();

  const [initialValues, setInitialValues] = React.useState({
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: [],
  });

  useEffect(() => {
    if (id) {
      axios.get(`https://dummyjson.com/products/${id}`).then(response => {
        setInitialValues(response.data);
      });
    }
  }, [id]);

  const handleFormSubmit = values => {
    if (id) {
      axios.put(`https://dummyjson.com/products/${id}`, values).then(() => {
        alert('Product updated successfully');
      });
    } else {
      axios.post('https://dummyjson.com/products', values).then(() => {
        alert('Product created successfully');
      });
    }
  };

  return (
    <Card
      sx={{
        p: 6,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="name"
                  label="Name"
                  color="info"
                  size="medium"
                  placeholder="Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="age"
                  label="Age"
                  color="info"
                  size="medium"
                  placeholder="Age"
                  value={values.age}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.age && !!errors.age}
                  helperText={touched.age && errors.age}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="apartmentDetails"
                  label="Apartment Details"
                  color="info"
                  size="medium"
                  placeholder="Apartment Details"
                  value={values.apartmentDetails}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={
                    !!touched.apartmentDetails && !!errors.apartmentDetails
                  }
                  helperText={
                    touched.apartmentDetails && errors.apartmentDetails
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  rows={3}
                  multiline
                  fullWidth
                  color="info"
                  size="medium"
                  name="streetAddress"
                  label="Street Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Street Address"
                  value={values.streetAddress}
                  error={!!touched.streetAddress && !!errors.streetAddress}
                  helperText={touched.streetAddress && errors.streetAddress}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="city"
                  label="City"
                  color="info"
                  size="medium"
                  placeholder="City"
                  value={values.city}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.city && !!errors.city}
                  helperText={touched.city && errors.city}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="state"
                  label="State"
                  color="info"
                  size="medium"
                  placeholder="State"
                  value={values.state}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.state && !!errors.state}
                  helperText={touched.state && errors.state}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="pinCode"
                  label="Pin Code"
                  color="info"
                  size="medium"
                  placeholder="Pin Code"
                  value={values.pinCode}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.pinCode && !!errors.pinCode}
                  helperText={touched.pinCode && errors.pinCode}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  label="Email"
                  color="info"
                  size="medium"
                  placeholder="Email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="personalContactNo"
                  color="info"
                  size="medium"
                  label="Personal Contact No"
                  placeholder="Personal Contact No"
                  onBlur={handleBlur}
                  value={values.personalContactNo}
                  onChange={handleChange}
                  error={
                    !!touched.personalContactNo && !!errors.personalContactNo
                  }
                  helperText={
                    touched.personalContactNo && errors.personalContactNo
                  }
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  type="number"
                  name="emergencyContactNo"
                  color="info"
                  size="medium"
                  label="Emergency Contact No"
                  placeholder="Emergency Contact No"
                  onBlur={handleBlur}
                  value={values.emergencyContactNo}
                  onChange={handleChange}
                  error={
                    !!touched.emergencyContactNo && !!errors.emergencyContactNo
                  }
                  helperText={
                    touched.emergencyContactNo && errors.emergencyContactNo
                  }
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  select
                  fullWidth
                  color="info"
                  size="medium"
                  name="validationDocumentType"
                  onBlur={handleBlur}
                  placeholder="Document Type"
                  onChange={handleChange}
                  value={values.validationDocumentType}
                  label="Select Document"
                  error={
                    !!touched.validationDocumentType &&
                    !!errors.validationDocumentType
                  }
                  helperText={
                    touched.validationDocumentType &&
                    errors.validationDocumentType
                  }
                >
                  <MenuItem value="aadhaarCard">Aadhaar Card</MenuItem>
                  <MenuItem value="drivingLicense">Driving License</MenuItem>
                  <MenuItem value="collegeId">College ID</MenuItem>
                </TextField>
              </Grid>

              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  name="validationDocumentNo"
                  color="info"
                  size="medium"
                  onBlur={handleBlur}
                  value={values.validationDocumentNo}
                  label="Enter Document No"
                  onChange={handleChange}
                  placeholder="Enter Document No"
                  error={
                    !!touched.validationDocumentNo &&
                    !!errors.validationDocumentNo
                  }
                  helperText={
                    touched.validationDocumentNo && errors.validationDocumentNo
                  }
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Button variant="contained" color="info" type="submit">
                  Book a Bed
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Card>
  );
};

export default ProductForm;
