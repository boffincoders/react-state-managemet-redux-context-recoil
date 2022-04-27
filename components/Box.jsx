import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
} from "@mui/material";

import React from "react";

const CustomBox = ({ name, icon, link }) => {
  const styles = {
    media: {
      height: 50,
      width : 250,
     
    },
  };
  return (
    <Box flex={4} p={4}>
    
      <Link href={`/dashboard${link}`} sx={{ textDecoration: "none" }}>
        <Card
        
          sx={{
            maxWidth: 345,
            mt: 3,
            cursor: "pointer",
            border: "0.5px solid #f2c533",
            textAlign : "center"
          }}
          elevation={0}
        >

          
          <img  src={icon} style={{height : 200 , width : 250 , padding : 10}}  />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default CustomBox;
