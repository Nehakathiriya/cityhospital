import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteMedicine, getMedicines, postMedicines, updateMedicine } from '../../redux/action/medicine.action';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Medicine() {
  let d = new Date();
  let nd = new Date();
  nd.setDate(d.getDate() - 1);

  const medicineSchema = yup.object({
    name: yup.string().required("Medicine Name is required"),
    price: yup.number().required("Price is required"),
    expiry: yup
      .date()
      .min(nd, "Please enter a current or future date")
      .required("Please enter a date"),
    desc: yup
      .string()
      .required("Please enter a message")
      .test("message", "Message in between 5 to 10 words."
        , function (val) {
          let arr = val.split(" ");

          if (arr.length >= 10 && arr.length <= 50) {
            return true;
          } else {
            return false;
          }
        }),
  });

  const [open, setOpen] = React.useState(false);
  const [medicineData, setMedicineData] = React.useState([]);
  const [updateData, setUpdateData] = React.useState(false);
  const [editingId, setEditingId] = React.useState(null);




  const dispatch = useDispatch();

  const medicines = useSelector(state => state.medicines);
  console.log(medicines);

  useEffect(() => {
    dispatch(getMedicines());
  }, []);

  // useEffect(() => {
  //   let localData = JSON.parse(localStorage.getItem("medicines"));
  //   if (localData) {
  //     setMedicineData(localData);
  //   }
  // }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (values) => {
    console.log(values);

    dispatch(postMedicines(values))

    // let localData = JSON.parse(localStorage.getItem("medicines"));

    // let id = Math.floor(Math.random() * 10000);

    // if (localData) {
    //   localData.push({ ...values, id: id });
    //   localStorage.setItem("medicines", JSON.stringify(localData));
    //   setMedicineData(localData);
    // } else {
    //   localStorage.setItem(
    //     "medicines",
    //     JSON.stringify([{ ...values, id: id }])
    //   );
    //   setMedicineData([{ ...values, id: id }]);
    // }
  };

  const handleUpdate = (data) => {
    dispatch(updateMedicine(data));
    // let localData = JSON.parse(localStorage.getItem("medicines"));
    // let updatedData = localData.map((v) => (v.id === editingId ? values : v));

    // localStorage.setItem("medicines", JSON.stringify(updatedData));
    // setMedicineData(updatedData);
    // setEditingId(null);
  };

  const formikObj = useFormik({
    initialValues: {
      name: "",
      price: "",
      expiry: "",
      desc: "",
    },
    validationSchema: medicineSchema,
    onSubmit: (values, { resetForm }) => {
      if (updateData) {
        handleUpdate(values);
      } else {
        handleAdd(values);
      }
      setUpdateData(false);
      handleClose();
      resetForm();
    },
  });

  let { handleSubmit, handleChange, handleBlur, values, touched, errors, resetForm, setValues } =
    formikObj;

  const handleEdit = (data) => {

    handleClickOpen();
    setValues(data);
    setUpdateData(true);
    setEditingId(data.id);
  };

  const handleDelete = (data, id) => {
    console.log(data, id);

    dispatch(deleteMedicine(data.id));
    // let id = data.id;
    // let localData = JSON.parse(localStorage.getItem("medicines"));
    // let newMedicineData = localData.filter((v) => v.id !== id);
    // localStorage.setItem("medicines", JSON.stringify(newMedicineData));
    // setMedicineData(newMedicineData);
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Medicine name", width: 130 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "expiry", headerName: "Expiry", width: 130 },
    { field: "desc", headerName: "Description", width: 130 },
    {
      field: 'action',
      headerName: 'Action',
      width: 530,
      renderCell: (params) => (
        <>
          <EditIcon onClick={() => handleEdit(params.row)} fontSize="small" style={{ color: 'grey' }} />
          <IconButton onClick={() => handleDelete(params.row)} aria-label="delete" size="small">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </>
      )
    },
  ];

  return (
    <React.Fragment>

      {
        medicines.isLoading ?
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box> :

          medicines.error ?
            <p>{medicines.error.message}</p> :

            <>

              <Button variant="outlined" onClick={handleClickOpen}>
                Add Medicine
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Medicine</DialogTitle>
                <DialogContent>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      margin="dense"
                      id="name"
                      name="name"
                      label="Medicine Name"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <span>{errors.name && touched.name ? errors.name : null}</span>
                    <TextField
                      margin="dense"
                      id="price"
                      name="price"
                      label="Price"
                      type="number"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                    <span>{errors.price && touched.price ? errors.price : null}</span>
                    <TextField
                      margin="dense"
                      id="expiry"
                      name="expiry"
                      label="Expiry"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.expiry}
                    />
                    <span>{errors.expiry && touched.expiry ? errors.expiry : null}</span>
                    <TextField
                      margin="dense"
                      id="desc"
                      name="desc"
                      label="Description"
                      fullWidth
                      variant="standard"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.desc}
                    />
                    <span>{errors.desc && touched.desc ? errors.desc : null}</span>
                    <DialogActions>
                      <Button type="submit">{updateData ? 'Update' : 'Add'}</Button>
                      <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                  </form>
                </DialogContent>
              </Dialog>

              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={medicines.medicines}
                  columns={columns}
                  // pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
              </div>

            </>
      }

    </React.Fragment>
  );
}


