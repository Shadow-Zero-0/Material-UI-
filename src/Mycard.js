import { Box, Checkbox } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import {
  Bookmark,
  BookmarkBorder,
  Favorite,
  FavoriteBorder,
} from "@mui/icons-material";
const Mycard = () => {
  const mycard = [
    {
      username: "do3aa",
      img: "https://images.pexels.com/photos/414523/pexels-photo-414523.jpeg?auto=compress&cs=tinysrgb&w=400",
      bg: "#C5705D",
      name: "d",
    },{
      username: "Omar",
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=400",
      bg: "teal",
      name: "O",
    },{
      username: "Hassan",
      img: "https://images.pexels.com/photos/204495/pexels-photo-204495.jpeg?auto=compress&cs=tinysrgb&w=400",
      bg: "#74512D",
      name: "H",
    },{
      username: "Mohammed",
      img: "https://images.pexels.com/photos/426893/pexels-photo-426893.jpeg?auto=compress&cs=tinysrgb&w=400",
      bg: "#FFB22C",
      name: "M",
    },
    {
      username: "Ahmed",
      img: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=400",
      bg: "red",
      name: "A",
    },
    {
      username: "Ali",
      img: "https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=400",
      bg: "cyan",
      name: "A",
    },
    {
      username: "Alaa",
      img: "https://images.pexels.com/photos/906097/pexels-photo-906097.jpeg?auto=compress&cs=tinysrgb&w=400",
      bg: "purple",
      name: "A",
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mt: "60px", flexGrow: "1" }}>
      {mycard.map((item) => {
        return (
          <Card
            key={item.username}
            sx={{
              maxWidth: {xs:'97%',sm:444},
              my: 5,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: item.bg }} aria-label="recipe">
                  {item.name}
                </Avatar>
              }
              action={
                <IconButton onClick={(eo) => {
                  handleClick(eo);
                }} aria-label="settings">
                  <MoreVertIcon
                    
                  />
                </IconButton>
              }
              title={item.username}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.img}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />

              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box flexGrow={1} />
              <Checkbox icon={<BookmarkBorder />} checkedIcon={<Bookmark />} />
            </CardActions>
          </Card>
        );
      })}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </Box>
  );
};

export default Mycard;
