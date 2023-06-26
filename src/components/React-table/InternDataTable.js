import React from "react";
import DataDialog from "../DataDialog";
import DataTable from "react-data-table-component";

// const columns = [
//   {
//     name: "Email Address",
//     selector: (row) => row.email,
//   },
//   {
//     name: "FirstName",
//     selector: (row) => row.firstName,
//   },
//   {
//     name: "LastName",
//     selector: (row) => row.lastName,
//   },
//   {
//     name: "Phone No",
//     selector: (row) => row.phone,
//   },
//   {
//     name: "Email Category",
//     selector: (row) => row.category,
//   },
//   {
//     name: "Register Date",
//     selector: (row) => row.register,
//   },
// ];

// const defaultData = [
//   {
//     id: 1,
//     email: "Daevika_Gill46@yahoo.co.in",
//     phone: { 1: "+91-677-4410427", 2: "+916004297915" },

//     firstName: "Adhiraj",
//     category: "ERP",
//     lastName: "Guneta",
//     register: "04-27-2022",
//   },
//   {
//     id: 2,
//     email: "Daevika_Gill46@yahoo.co.in",
//     phone: { 1: "+91-677-4410427", 2: "+916004297915" },

//     firstName: "Ravi",
//     category: "ERP",
//     lastName: "Guneta",
//     register: "04-27-2022",
//   },
//   {
//     id: 3,
//     email: "Daevika_Gill46@yahoo.co.in",
//     phone: { 1: "+91-677-4410427", 2: "+916004297915" },

//     firstName: "Adhiraj",
//     category: "ERP",
//     lastName: "Guneta",
//     register: "04-27-2022",
//   },
//   {
//     id: 4,
//     email: "Daevika_Gill46@yahoo.co.in",
//     phone: { 1: "+91-677-4410427", 2: "+916004297915" },

//     firstName: "Ravi",
//     category: "ERP",
//     lastName: "Guneta",
//     register: "04-27-2022",
//   },
// ];

const columns = [
  {
    name: "Email Address",
    selector: (row) => row.email,
    sortable: true,
    width: "200px",
  },
  {
    name: "FirstName",
    selector: (row) => row.firstName,
    sortable: true,
  },
  {
    name: "LastName",
    selector: (row) => row.lastName,
    sortable: true,
  },
  {
    name: "Phone No",
    selector: (row) => row.phone,
  },
  {
    name: "Email Category",
    selector: (row) => row.category,
  },
  {
    name: "Register Date",
    selector: (row) => row.register,
  },
];

const data = [
  {
    id: 1,
    email: "Ranju_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Adhiraj",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
  {
    id: 2,
    email: "Mohan_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Mohan",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
  {
    id: 3,
    email: "Ramesh_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Ramesh",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
  {
    id: 4,
    email: "Shayamgy@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Shyam",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
  {
    id: 5,
    email: "Daevika_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Adhiraj",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
  {
    id: 6,
    email: "Ranjika_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Ranika",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
  {
    id: 7,
    email: "Daevika_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Adhiraj",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
  {
    id: 8,
    email: "Daevika_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Adhiraj",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },

  {
    id: 9,
    email: "Daevika_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Adhiraj",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
  {
    id: 10,
    email: "Daevika_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Adhiraj",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },

  {
    id: 11,
    email: "Daevika_Gill46@yahoo.co.in",
    phone: "65757858758758",
    firstName: "Adhiraj",
    category: "ERP",
    lastName: "Guneta",
    register: "04-27-2022",
  },
];

const InternDataTable = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DataDialog open={open} handleClose={handleClose} />
      <DataTable
        title="Filter by Email Category"
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlights
        highlightOnHover
        actions={
          <>
            <div style={{ marginBottom: "20px" }}>
              <button onClick={() => setOpen(true)} style={{ padding: "10px" }}>
                Import Contact
              </button>
            </div>
          </>
        }
      />
    </>
  );
};

export default InternDataTable;
