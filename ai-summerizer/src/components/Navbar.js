import { useState } from "react";
//import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

import Home from "./Home";

// Navbar Component: This component represents the navigation bar of the website.
// It includes the logo, navigation links, menu button for mobile view, and a drawer for displaying menu options.
const Navbar = () => {

    // State for controlling the menu drawer
    const [openMenu,setOpenMenu] = useState(false);
    
    // State for managing the active page
    const [activePage, setActivePage] = useState("Home");

    // Menu options to be displayed in the drawer
    const menuOptions = [
        {
           text:"Home",
           icon: <HomeIcon />,
        },
        {
            text:"About",
            icon: <InfoIcon />,
         },
         {
            text:"Testimonials",
            icon: <CommentRoundedIcon />,
         },
         {
            text:"Contact",
            icon: <PhoneRoundedIcon />,
         },
         {
            text:"Cart",
            icon: <ShoppingCartRoundedIcon />,
         },
    ];
  
  return (
    <nav>
    {/* Logo Container */}
    <div className="nav-logo-container">
        <h1 style={{
            color: "#E56908",
            fontWeight: "bold",
        }}>Notiv AI.</h1>
    {/* Logo Image */}
    {/* <img src={Logo} alt="" /> */}
  </div>
  {/* Navigation Links Container */}
  <div className="navbar-links-container">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Testimonials</a>
    <a href="#">Contact</a>
    {/* Cart Icon */}
    {/* <a href="">
      <BsCart2 className="navbar-cart-icon" />
    </a> */}
    {/* Sign Up Button */}
    <button className="primary-button">Sign Up for Free</button>
  </div>
  {/* Menu Container */}
  <div className="navbar-menu-container">
    {/* Menu Icon */}
    <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
  </div>
  {/* Drawer Component for Mobile View */}
  <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => setOpenMenu(false)}
      onKeyDown={() => setOpenMenu(false)}
    >
      {/* List of Menu Options */}
      <List>
        {menuOptions.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {/* Divider */}
      <Divider />
    </Box>
  </Drawer>
  </nav>
  );
}

export default Navbar;
