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
    option1: "",
    option2: "",
    option3: "",
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
              value={formValues.option1}
              onChange={(event) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  option1: event.target.value,
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
              <MenuItem value="Option 4">Option 4</MenuItem>
              <MenuItem value="Option 5">Option 5</MenuItem>
              <MenuItem value="Option 6">Option 6</MenuItem>
              <MenuItem value="Option 7">Option 7</MenuItem>
              <MenuItem value="Option 8">Option 8</MenuItem>
              <MenuItem value="Option 9">Option 9</MenuItem>
              <MenuItem value="Option 10">Option 10</MenuItem>
              <MenuItem value="Option 11">Option 11</MenuItem>
              <MenuItem value="Option 12">Option 12</MenuItem>
            </Select>
          </FormControl>
        </FormField>
                <FormField>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="option-label">Option</InputLabel>
            <Select
              labelId="option-label"
              id="option"
              value={formValues.option2}
              onChange={(event) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  option2: event.target.value,
                }))
              }
              label="Option"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              
              <MenuItem value="Option 13">Option 13</MenuItem>
              <MenuItem value="Option 14">Option 14</MenuItem>
              <MenuItem value="Option 15">Option 15</MenuItem>
              <MenuItem value="Option 16">Option 16</MenuItem>
              <MenuItem value="Option 17">Option 17</MenuItem>
              <MenuItem value="Option 18">Option 18</MenuItem>
              <MenuItem value="Option 19">Option 19</MenuItem>
              <MenuItem value="Option 20">Option 20</MenuItem>
              <MenuItem value="Option 21">Option 21</MenuItem>
              <MenuItem value="Option 22">Option 22</MenuItem>
              <MenuItem value="Option 23">Option 23</MenuItem>
              <MenuItem value="Option 24">Option 24</MenuItem>
            </Select>
          </FormControl>
        </FormField>
                <FormField>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="option-label">Option</InputLabel>
            <Select
              labelId="option-label"
              id="option"
              value={formValues.option3}
              onChange={(event) =>
                setFormValues((prevValues) => ({
                  ...prevValues,
                  option3: event.target.value,
                }))
              }
              label="Option"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
             
              <MenuItem value="Option 25">Option 25</MenuItem>
              <MenuItem value="Option 26">Option 26</MenuItem>
              <MenuItem value="Option 27">Option 27</MenuItem>
              <MenuItem value="Option 28">Option 28</MenuItem>
              <MenuItem value="Option 29">Option 29</MenuItem>
              <MenuItem value="Option 30">Option 30</MenuItem>
              <MenuItem value="Option 31">Option 31</MenuItem>
              <MenuItem value="Option 32">Option 32</MenuItem>
              <MenuItem value="Option 33">Option 33</MenuItem>
              <MenuItem value="Option 34">Option 34</MenuItem>
              <MenuItem value="Option 35">Option 35</MenuItem>
              <MenuItem value="Option 36">Option 36</MenuItem>
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
