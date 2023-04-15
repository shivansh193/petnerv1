import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button, InputAdornment } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubmitButton = styled(Button)`
  && {
    background-color: #4caf50;
    color: #fff;
    font-weight: bold;
    &:hover {
      background-color: #388e3c;
    }
  }
`;

const Form = () => {
  const [formValues, setFormValues] = useState({
    option: "",
    date: null,
    text: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleFormSubmit}>
        <FormField>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="option-label">Which breed do you want</InputLabel>
            <Select
              labelId="option-label"
              id="option"
              value={formValues.option}
              onChange={(event) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  option: event.target.value,
                }))
              }
              label="Option"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
              <MenuItem value="Option 3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </FormField>
        <FormField>
          
          
          
          
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
      <DatePicker
              label="Date"
              value={formValues.date}
              onChange={(value) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  date: value,
                }))
              }
              renderInput={(params) => (
                <TextField {...params} variant="outlined" fullWidth />
              )}
            />
      </DemoContainer>
    </LocalizationProvider>
        
        
        
        
        
        
        </FormField>
        <FormField>
          <TextField
            label="Text"
            variant="outlined"
            fullWidth
            value={formValues.text}
            onChange={(event) =>
              setFormValues((prevValues) => ({
                ...prevValues,
                text: event.target.value,
              }))
            }
          />
        </FormField>
        <SubmitButton variant="contained" type="submit">
          Submit
        </SubmitButton>
      </FormContainer>
    </Container>
  );
};

export default Form;
