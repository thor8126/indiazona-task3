import { Route, Routes } from "react-router-dom";

import Test from "./pages/Test/Test";
import AdminLayout from "./layouts/AdminLayout";
import OrderTracking from "./pages/OrderTracking/Root";
import { Navigate } from "react-router-dom";
import ProfileSettings from "./pages/ProfilePage/ProfileSettings";

import avatar from "./pages/ProfilePage/avatar.png";
import MyOrder from "./pages/MyOrders/MyOrders";
import ViewOrder from "./pages/ViewOrder/Root";
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
    label: "Personal Information",
    icon: "Person",
    id: "personal-info",
    selected: true,
  },
  {
    label: "My Orders",
    icon: "ShoppingBag",
    id: "myorders",
  },
  {
    label: "My Wishlist",
    icon: "Favorite",
    id: "wishlist",
  },
  {
    label: "Manage Addresses",
    icon: "LocationOn",
    id: "myaddresses",
  },
];
function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* Testing Route */}
        <Route index element={<Navigate to="/profile" replace />} />
        {/*  */}
        <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/return" element={<OrderTracking />} />
        <Route
          path="/profile"
          element={<ProfileSettings user={user} navItems={navItems} />}
        />
        <Route path="/myorders" element={<MyOrder />} />
        <Route path="/view-order" element={<ViewOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
