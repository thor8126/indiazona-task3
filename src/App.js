import { Route, Routes } from "react-router-dom";

import Test from "./pages/Test/Test";
import AdminLayout from "./layouts/AdminLayout";
import { Navigate } from "react-router-dom";

import MyOrder from "./components/MyOrders/MyOrders";
import ProfileSettings from "./layouts/ProfilePage";
import OrderTracking from "./components/OrderTracking/Root";
import ViewOrder from "./components/ViewOrder/Root";

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
        <Route path="/profile/*" element={<ProfileSettings />} />
        <Route path="/myorders" element={<MyOrder />} />
        <Route path="/view-order" element={<ViewOrder />} />
      </Route>
    </Routes>
  );
}

export default App;
