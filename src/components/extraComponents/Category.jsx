import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Grid, Box, Paper } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { callTheApi } from "../../redux/QuestionsSlice";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
  fontSize: "16px",
}));

const lightTheme = createTheme({ palette: { mode: "light" } });

const Categories = ({categories}) => {
  return (
    <>
      <Grid container spacing={4}>
        {[lightTheme].map((theme) => (
          <>
            <Grid item xs={4} key={uuidv4()}>
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    p: 2,
                    bgcolor: "background.default",
                    display: "grid",
                    gridTemplateColumns: { md: "1fr" },
                    gap: 2,
                  }}
                >
                  {categories?.map((categoryname) => (
                    <Item key={uuidv4()} categoryname={categoryname}>
                      {categoryname}
                    </Item>
                  ))}
                </Box>
              </ThemeProvider>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{
                  p: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr 1fr 1fr" },
                  gap: 2,
                }}
              >
                {/* {allQuestions?.map((el) => (
                  <Item key={uuidv4()} el={el}>
                    {el.value}
                  </Item>
                ))} */}
              </Box>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};
export default Categories;
