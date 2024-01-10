import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";

export default function Doctor() {
  const [doctorData, setDoctorData] = React.useState([]);
  const [update, setUpdate] = React.useState(false)

  React.useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("doctors"));

    if (localData) {
      setDoctorData(localData)
    }
  }, []);
  
  const doctorSchema = yup.object({
    doctorName: yup.string().required("Doctor Name is required"),
    degree: yup
      .string()
      .oneOf(["MBBS", "MD", "DO"], "Invalid Degree")
      .required("Position is required"),
    desc: yup.string().required("Description is required"),
  });

  const handleAdd = (values) => {
    let localData = JSON.parse(localStorage.getItem("doctors"));

    console.log(localData);

    let id = Math.floor(Math.random() * 10000);

    if (localData) {
      localData.push({ ...values, id: id });
      localStorage.setItem("doctors", JSON.stringify(localData)); //2nd time

      setDoctorData(localData);
    } else {
      localStorage.setItem("doctors", JSON.stringify([{ ...values, id: id }])); //1st
      setDoctorData([{ ...values, id: id }]);
    }
  };

  const handleUpdateData = (data) => {
    // console.log("update data");
    let localData = JSON.parse(localStorage.getItem("doctors"));

    let uData = localData.map((v) => {
      if(v.id === data.id){
        return data;
      }else{
        return v;
      }
    })

    localStorage.setItem("doctors", JSON.stringify(uData));
    setDoctorData(uData);

  }

  const formikObj = useFormik({
    initialValues: {
      doctorName: "",
      degree: "",
      desc: "",
    },
    validationSchema: doctorSchema,
    onSubmit: (values, {resetForm}) => {
      console.log(values);

      if (update) {
        handleUpdateData(values)
      } else {
        handleAdd(values);
      }

      setUpdate(false);
      resetForm();
      handleClose();
    },
  });

  let {
    handleSubmit,
    handleChange,
    handleBlur,
    setValues,
    values,
    touched,
    errors,
  } = formikObj;
  console.log(values, errors);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (data) => {
    console.log(data);
  };

  const handleEdit = (data) => {
    console.log(data);

    handleClickOpen();
    setValues(data);
    setUpdate(true)
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "doctorName", headerName: "Doctor name", width: 130 },
    { field: "degree", headerName: "Degree", width: 130 },
    { field: "desc", headerName: "Description", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 1000,
      renderCell: (params) => (
        <>
        <IconButton onClick={() => handleDelete(params.row)} aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={() => handleEdit(params.row)}
          aria-label="delete"
          size="small"
        >
          <CreateIcon fontSize="small" />
        </IconButton>
      </>

      ),
    },
  ];

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Doctor
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Doctor</DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
            name="doctorName"
              margin="dense"
              id="doctorName"
              label="doctorName"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.doctorName}
            />
            <span>
              {errors.doctorName && touched.doctorName
                ? errors.doctorName
                : null}
            </span>

            <TextField
              margin="dense"
              id="degree"
              label="degree"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.degree}
            />
            <span>
              {errors.degree && touched.degree ? errors.degree : null}
            </span>
            

            <TextField
              margin="dense"
              id="desc"
              label="desc"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
            />
            <span>{errors.desc && touched.desc ? errors.desc : null}</span>
            <DialogActions>
              <Button type="submit">{update ? 'Update' : 'Add'}</Button>
              <Button onClick={handleClose}>
                Cancle
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={doctorData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </React.Fragment>
  );
}

















// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { DataGrid } from "@mui/x-data-grid";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CreateIcon from "@mui/icons-material/Create";
// import { IconButton } from "@mui/material";

// export default function Doctor() {
//   const [doctorData, setDoctotData] = React.useState([]);
//   const [update, setUpdate] = React.useState(false);

//   React.useEffect(() => {
//     let localData = JSON.parse(localStorage.getItem("doctors"));

//     if (localData) {
//       setDoctotData(localData);
//     }
//   }, []);

//   const doctorSchema = yup.object({
//     doctorName: yup.string().required("Doctor Name is required"),
//     degree: yup
//       .string()
//       .oneOf(
//         ["MBBS", "MD", "DO", "BHMS", "BAMS", "BUMS", "BSMS", "BNYS", "MS"],
//         "Invalid Degree"
//       )
//       .required("Degree is required"),
//     desc: yup.string().required("Description is required"),
//     designation: yup
//       .string()
//       .required("Please Enter Your Name")
//       .matches(/^[a-zA-Z ]{2,30}$/, "Please enter a valid name"),
//   });

//   const handleUpdateData = () => {
//     console.log("update data");
//   };

//   const handleAdd = (values) => {
//     let localData = JSON.parse(localStorage.getItem("doctors"));

//     console.log(localData);
//     let id = Math.floor(Math.random() * 10000);

//     if (localData) {
//       localData.push({ ...values, id: id });
//       localStorage.setItem("doctors", JSON.stringify(localData));
//       setDoctotData(localData);
//     } else {
//       localStorage.setItem("doctors", JSON.stringify([{ ...values, id: id }]));
//       setDoctotData([{ ...values, id: id }]);
//     }
//   };

//   const formikObj = useFormik({
//     initialValues: {
//       doctorName: "",
//       degree: "",
//       desc: "",
//       designation: "",
//     },
//     validationSchema: doctorSchema,
//     onSubmit: (values, { resetForm }) => {
//       if (update) {
//         handleUpdateData(values);
//       } else {
//         handleAdd(values);
//       }

//       setUpdate(false);
//       resetForm();
//       handleClose();
//     },
//   });

//   let {
//     handleSubmit,
//     handleChange,
//     handleBlur,
//     setValues,
//     values,
//     touched,
//     errors,
//   } = formikObj;
//   console.log(values, errors);
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDelete = (data) => {
//     console.log(data);
//   };

//   const handleEdit = (data) => {
//     console.log(data);

//     handleClickOpen();
//     setValues(data);
//     setUpdate(true);
//   };

//   const columns = [
//     { field: "id", headerName: "ID", },
//     { field: "doctorName", headerName: "Doctor name",  },
//     { field: "degree", headerName: "Degree",  },
//     { field: "desc", headerName: "Discription",  },
//     { field: "designation", headerName: "Designation",  },
//     {
//       field: "",
//       headerName: "Actions",
//       renderCell: (params) => (
//         <div className="flex-container">
//         <IconButton onClick={() => handleEdit(params.row)}>
//             <CreateIcon />
//           </IconButton>
//           <IconButton onClick={() => handleEdit(params.row)}>
//             <CreateIcon />
//           </IconButton>
//         </div>
          
          
      
//       )
//     },
//   ];

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Doctor
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Doctor</DialogTitle>

//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               name="doctorName"
//               margin="dense"
//               id="doctorName"
//               label="doctorName"
//               type="text"
//               fullWidth
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.doctorName}
//             />
//             <span>
//               {errors.doctorName && touched.doctorName
//                 ? errors.doctorName
//                 : null}
//             </span>

//             <TextField
//               margin="dense"
//               id="degree"
//               label="degree"
//               type="text"
//               fullWidth
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.degree}
//             />
//             <span>
//               {errors.degree && touched.degree ? errors.degree : null}
//             </span>

//             <TextField
//               margin="dense"
//               id="designation"
//               label="designation"
//               type="text"
//               fullWidth
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.designation}
//             />
//             <span>
//               {errors.designation && touched.designation
//                 ? errors.designation
//                 : null}
//             </span>

//             <TextField
//               margin="dense"
//               id="desc"
//               label="desc"
//               type="text"
//               fullWidth
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.desc}
//             />
//             <span>{errors.desc && touched.desc ? errors.desc : null}</span>
//             <DialogActions>
//               <Button type="submit">{update ? "Update" : "Add"}</Button>
//               <Button onClick={handleClose} type="submit">
//                 Cancle
//               </Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>
    
//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={doctorData}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           checkboxSelection
//         />
//         </div>
      
//     </React.Fragment>
//   );
// }

// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { DataGrid } from "@mui/x-data-grid";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
// import CreateIcon from "@mui/icons-material/Create";

// export default function Doctor() {
//   const [doctorData, setDoctorData] = React.useState(() => {
//     const localData = JSON.parse(localStorage.getItem("doctors")) || [];
//     return localData;
//   });

//   const doctorSchema = yup.object({
//     doctorName: yup.string().required("Doctor Name is required"),
//     degree: yup
//       .string()
//       .oneOf(
//         ["MBBS", "MD", "DO", "BHMS", "BAMS", "BUMS", "BSMS", "BNYS", "MS"],
//         "Invalid Degree"
//       )
//       .required("Degree is required"),
//     desc: yup.string().required("Description is required"),
//     designation: yup
//       .string()
//       .required("Please Enter Your Name")
//       .matches(/^[a-zA-Z ]{2,30}$/, "Please enter a valid name"),
//   });

//   const handleAdd = (values) => {
//     let localData = JSON.parse(localStorage.getItem("doctors")) || [];
//     let id = Math.floor(Math.random() * 10000);

//     if (localData) {
//       localData.push({ ...values, id: id });
//       localStorage.setItem("doctors", JSON.stringify(localData));
//       setDoctorData(localData);
//     } else {
//       localStorage.setItem("doctors", JSON.stringify([{ ...values, id: id }]));
//       setDoctorData([{ ...values, id: id }]);
//     }
//   };

//   const handleEdit = (data) => {
//     console.log(data);
//     setValues(data);

//     handleClickOpen();
//   };

//   const handleDelete = (data) => {
//     const updatedData = doctorData.filter((doctor) => doctor.id !== data.id);
//     localStorage.setItem("doctors", JSON.stringify(updatedData));
//     setDoctorData(updatedData);
//   };

//   const formikObj = useFormik({
//     initialValues: {
//       doctorName: "",
//       degree: "",
//       desc: "",
//       designation: "",
//     },
//     validationSchema: doctorSchema,
//     onSubmit: (values) => {
//       console.log(values);

//       if (formikObj.values.id) {
//         const updatedData = doctorData.map((doctor) =>
//           doctor.id === formikObj.values.id
//             ? { ...values, id: doctor.id }
//             : doctor
//         );
//         localStorage.setItem("doctors", JSON.stringify(updatedData));
//         setDoctorData(updatedData);
//       } else {
//         handleAdd(values);
//       }

//       handleClose();
//     },
//   });

//   const { handleSubmit, handleChange, handleBlur, setValues, values, touched, errors } =
//     formikObj;

//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);

//     formikObj.resetForm();
//   };

//   const columns = [
//     { field: "id", headerName: "ID", width: 70 },
//     { field: "doctorName", headerName: "Doctor name", width: 130 },
//     { field: "degree", headerName: "Degree", width: 130 },
//     { field: "desc", headerName: "Description", width: 130 },
//     { field: "designation", headerName: "Designation", width: 130 },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 130,
//       renderCell: (params) => (
//         <>
//           <IconButton
//             onClick={() => handleEdit(params.row)}
//             aria-label="edit"
//             size="small"
//           >
//             <CreateIcon fontSize="inherit" />
//           </IconButton>
//           <IconButton
//             onClick={() => handleDelete(params.row)}
//             aria-label="delete"
//             size="small"
//           >
//             <DeleteIcon fontSize="inherit" />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Doctor
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Doctor</DialogTitle>

//         <DialogContent>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               margin="dense"
//               id="doctorName"
//               label="doctorName"
//               type="text"
//               fullWidth
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.name}
//             />
//             <span>
//               {errors.doctorName && touched.doctorName
//                 ? errors.doctorName
//                 : null}
//             </span>

//             <TextField
//               margin="dense"
//               id="degree"
//               label="degree"
//               type="text"
//               fullWidth
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.degree}
//             />
//             <span>
//               {errors.degree && touched.degree ? errors.degree : null}
//             </span>

//             <TextField
//               margin="dense"
//               id="designation"
//               label="designation"
//               type="text"
//               fullWidth
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.designation}
//             />
//             <span>
//               {errors.designation && touched.designation
//                 ? errors.designation
//                 : null}
//             </span>

//             <TextField
//               margin="dense"
//               id="desc"
//               label="desc"
//               type="text"
//               fullWidth
//               variant="standard"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.desc}
//             />
//             <span>{errors.desc && touched.desc ? errors.desc : null}</span>
//             <DialogActions>
//               <Button type="submit">Add</Button>
//               <Button onClick={handleClose} type="submit">
//                 Cancle
//               </Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>

//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={doctorData}
//           columns={columns}
//           pageSize={5}
//           checkboxSelection
//         />
//       </div>
//     </React.Fragment>
//   );
// }
