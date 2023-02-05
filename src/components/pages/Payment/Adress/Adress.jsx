import { Box,  TextField  } from '@material-ui/core';
import React from 'react'
import '../payment.css'
import Total from '../Total'

const Adress = () => {
  return (
    <div>
      <Total />
      <Box
        style={{ marginTop: "15px" }}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ justifyContent: "space-between", marginTop: "5px" }}>
          <TextField
            size="small"
            style={{ margin: "5px" }}
            required
            id="outlined-basic"
            label="isim"
            variant="outlined"
          />
          <TextField
            size="small"
            style={{ margin: "5px" }}
            required
            id="outlined-basic"
            label="Soyisim"
            variant="outlined"
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <TextField
            style={{ margin: "5px" }}
            required
            size="small"
            id="outlined-basic"
            label="Telefon"
            variant="outlined"
          />
          <TextField
            style={{ margin: "5px" }}
            required
            size="small"
            id="outlined-basic"
            label="İl"
            variant="outlined"
          />
        </div>
        <div
          style={{
            textTransform: "",
            justifyContent: "space-between",
            marginTop: "5px",
          }}
        >
          <TextField
            size="small"
            style={{ margin: "5px" }}
            required
            id="outlined-basic"
            label="İlçe"
            variant="outlined"
          />
          <TextField
            size="small"
            style={{ margin: "5px" }}
            required
            id="outlined-basic"
            label="Mahalle"
            variant="outlined"
          />
        </div>
        <div style={{ justifyContent: "space-between", marginTop: "5px" }}>
          <TextField
            size="medium"
            style={{ margin: "5px", width: "27.5em", height: "" }}
            required
            id="outlined-basic"
            label="Adres"
            variant="outlined"
          />
        </div>
        <div>
          <button
            style={{
              width: "35em",
              height: "3em",
              marginTop: "5px",
              color: "White",
              backgroundColor: "orange",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Adresi Kaydet
          </button>
        </div>
      </Box>
    </div>
  );
};

export default Adress;
