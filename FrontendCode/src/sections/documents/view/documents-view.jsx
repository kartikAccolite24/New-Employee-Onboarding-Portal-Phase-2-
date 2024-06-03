// import React from 'react'

// export default function DocumentsView() {
//   return (
//     <div>
//       documents.
//     </div>
//   )
// }
import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DataGrid } from "@mui/x-data-grid";
import GetAppOutlinedIcon from "@mui/icons-material/GetAppOutlined";
import { Stack, useTheme ,IconButton,Typography} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

import Header from "src/layouts/dashboard/header";

import { tokens } from "./themee";
import { mockDataTeam } from "./mockData";

const DocumentsView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js";
    script.async = true;
    script.onload = () => {
      window.JsPDF = window.jspdf.jsPDF;
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleViewClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };
  const handleDownloadClick = (pdfUrl, documentName) => {
    downloadPDF(pdfUrl, documentName);
  };
  const settings = {
    // Your settings for the Slider component
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const downloadPDF = (pdfUrl, documentName) => {
    const doc = new window.JsPDF();
    doc.text("Downloaded PDF Content", 10, 10);
    const blob = doc.output('blob');
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${documentName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "documentName",
      headerName: "Document Name",
      flex: 1,
    },
    {
      field: "view",
      headerName: "View",
      sortable: false,
      width: 100,
      fontSize: '16px',
      fontWeight: 'bold',
      renderCell: ({ row }) => (
        <IconButton onClick={() => handleViewClick(row.pdfUrl)}>
          <VisibilityOutlinedIcon />
        </IconButton>
      ),
    },
    {
      field: "pdfUrl",
      headerName: "Download",
      sortable: false,
      width: 150,
      renderCell: ({ row }) => (
        <IconButton onClick={() => handleDownloadClick(row.pdfUrl, row.documentName)}>
          <GetAppOutlinedIcon />
        </IconButton>
      ),
    },
  ];
  return (
    <Stack m="20px" fontWeight='bold'>
       <Slider {...settings} style={{ marginLeft: '-30px' }}>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a114440124164fff93e6d4c0__Darwinbox%20Banner_2%20copy.jpg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a46922613264fff93ee90d4__Embrace%20Excellence_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a89337630364fff93ecd7d3__One%20Team%2C%20One%20Dream_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a110357827864fff93eb3b0a__Fearless%20Thinkers_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
        </div>
        <div>
          <img src="https://darwinbox-data-sing.s3.ap-southeast-1.amazonaws.com/INSTANCE1_a611617e4a1b8a_69/banners/a39387173164fff93f1b97a__Cultivate%20Care%20%26%20Compasion_Darwinbox%20Banner_1%20copy.jpg" alt="Slide 3" />
        </div>
      </Slider>
      <Header title="Onboarding Documents" subtitle="" />
      <Typography variant="h4" component="h1">
        Onboarding Documents
      </Typography>
      <Stack
        m="40px 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
            fontSize: '16px',
            backgroundColor: colors.grey[700],
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: '16px',
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: '16px',
            // Apply bold font weight to column headers only
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
            fontSize: '16px',
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.grey[900],
            fontSize: '16px',
          },
          "& .MuiCheckbox-root": {
            // color: `${colors.grey[100]} !important`,
            fontSize: '16px',
          },
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          checkboxSelection={false}
        />
      </Stack>
    </Stack>
  );
};
export default DocumentsView;





