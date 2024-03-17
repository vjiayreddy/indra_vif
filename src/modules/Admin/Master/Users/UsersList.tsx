import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { UserDataType } from "@crema/types/models/common/common";

interface UsersListProps {
  isLoading: boolean;
  data: UserDataType[];
}

export default function UsersList({ data, isLoading }: UsersListProps) {
  /**
   * Data Grid Columns
   */

  const columns: GridColDef[] = [
    {
      field: "userId",
      headerName: "No",
      minWidth: 30,
      editable: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "userName",
      headerName: "Name",
      minWidth: 250,
      flex: 2,
      editable: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "emailId",
      headerName: "Email Address",
      minWidth: 100,
      flex: 2,
      editable: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "mobileNo",
      headerName: "Phone",
      minWidth: 100,
      flex: 1,
      editable: false,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "more",
      headerName: "More",
      minWidth: 100,
      flex: 1,
      editable: false,
      sortable: false,
      disableColumnMenu: true,
    },
  ];

  return (
    <Box sx={{ height: "100%", width: "100%", backgroundColor: "white" }}>
      <DataGrid
        loading={isLoading}
        style={{ borderRadius: 0, borderLeft: 0 }}
        density="compact"
        rows={data}
        columns={columns}
        getRowId={(row) => row.userId}
        initialState={{
          sorting: {
            sortModel: [
              {
                field: "userName",
                sort: "asc",
              },
            ],
          },
          pagination: {
            paginationModel: {
              pageSize: 100,
            },
          },
        }}
        pageSizeOptions={[100]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
