import { Box, Stack } from "@mui/material";
import React from "react";
import CustomBox from "../../components/Box";
import Navbar from "../../components/navbar";
import { methods } from "../../utils/stateManagementMethods";

const Dashboard = () => {
  return (
    <Box bgcolor={"background.default"} color="text.primary">
      <Navbar />
      <Stack
        display={"flex"}
        justifyContent="space-between"
        spacing={2}
        direction="row"
        padding={7}
      >
        {methods.map((method, index) => (
          <CustomBox
            key={index}
            icon={method.icon}
            name={method.name}
            link={method.link}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default Dashboard;
