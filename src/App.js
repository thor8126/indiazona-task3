import { Route, Routes } from "react-router-dom";

import Test from "./pages/Test/Test";
import AdminLayout from "./layouts/AdminLayout";
import OrderTracking from "./pages/OrderTracking/Root";
import { Navigate } from "react-router-dom";
import ProfileSettings from "./layouts/ProfilePage";

import avatar from "./assets/avatar.png";
import MyOrder from "./pages/MyOrders/MyOrders";
import ViewOrder from "./pages/ViewOrder/Root";

import img1 from "./assets/order1.png";
import img2 from "./assets/order2.png";
import img3 from "./assets/order3.png";
import img4 from "./assets/order4.png";
const user = {
  fullName: "Siddhi Borekar",
  mobileNumber: "+91 9876543210",
  email: "sidborekar05@gmail.com",
  birthDate: "08/06/2004",
  password: "password123",
  avatar: avatar,
  notifications: false,
};
const navItems = [
  {
    id: "personal-info",
    icon: "Person",
    label: "Personal Information",
  },
  {
    id: "wishlist",
    icon: "Favorite",
    label: "My Wishlist",
  },
  {
    id: "myorders",
    icon: "ShoppingBag",
    label: "My Orders",
  },
  {
    id: "myaddresses",
    icon: "LocationOn",
    label: "My Addresses",
  },
];
const ordersData = [
  {
    id: 1,
    brand: "Trend Me",
    productName: "Women Floral A-Line Maxi Dress",
    size: "S",
    rating: 0,
    status: "Delivered",
    deliveryDate: "Wed, 20 sep",
    returnWindow: "Wed 2 oct",
    image: img1,
  },
  {
    id: 2,
    brand: "Denilli",
    productName: "Pointed Toe Block Heel Pumps",
    size: "37",
    rating: 0,
    status: "Cancelled",
    cancelDate: "Sat, 20 jan",
    image: img2,
  },
  {
    id: 3,
    brand: "Kotty",
    productName: "Women Fit High-Rise Cropped Jeans",
    size: "28",
    rating: 0,
    status: "Returned",
    returnDate: "Mon, 15 Feb",
    refundAmount: "₹599",
    image: img3,
  },
  {
    id: 4,
    brand: "Dave Rabbit",
    productName: "Men Regular Slim Fit Divided Cotton Shirt",
    size: "36",
    rating: 0,
    status: "Out for Delivery",
    expectedDate: "Mon, 03 oct",
    image: img4,
  },
];
function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* This is the sample route */}
        <Route
          index
          element={<Navigate to="/profile/personal-info" replace />}
        />

        {/*  */}
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/return" element={<OrderTracking />} />
        <Route
          path="/profile/*"
          element={<ProfileSettings user={user} navItems={navItems} />}
        />
        <Route path="/myorders" element={<MyOrder ordersData={ordersData} />} />
        <Route path="/view-order" element={<ViewOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
