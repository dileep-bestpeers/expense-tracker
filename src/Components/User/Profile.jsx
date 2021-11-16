import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router";
function Profile(props) {
    const history = useHistory()
    document.title = 'Profile'
    const logoutFunction = (user) => {
        localStorage.removeItem("MyDetails");
        history.push('/')
      };
      const deleteUser = (es) => {
        const user = JSON.parse(localStorage.getItem("MyDetails"))[0]
        let delData = JSON.parse(localStorage.getItem("AuthUsers")) 
        const filterData = delData.filter((u)=>{return u.email !== user.email})
        localStorage.setItem('AuthUsers', JSON.stringify(filterData))
        localStorage.removeItem('MyDetails')
        history.push('/')
      };
      
      const editMe = () => {
        history.push('/')
        history.push('edit')
      }
  
  return (
    <Card sx={{ maxWidth: "100%", height: "100vh" }}>
     
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/504400/cd2e6e5aa573e9dc9a6da6f99fa557dc817cb78b.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name : {props.detail.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email id : {props.detail.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Mobile : {props.detail.phonenumber}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Gender : {props.detail.gender}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address : {props.detail.address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Country : {props.detail.country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="success" onClick={editMe}>
          Edit
        </Button>
        <Button onClick={logoutFunction}  size="small" color="primary" variant="success">
          Logout
        </Button>
        <Button onClick={deleteUser} size="small" color="primary" variant="danger">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Profile;
