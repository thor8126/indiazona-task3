import { Route, Routes } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import { Navigate } from "react-router-dom";
import Campaign from "./components/CampaignPage/Campaign";
import OrderTracking from "./components/OrderTracking/Root";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        {/* This is the sample route */}
        <Route index element={<Navigate to="/campaign" replace />} />
        {/*  */}
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
        {/* ```` */}
        {/* <Route path="/order-tracking" element={<OrderTracking />} />
        <Route path="/return" element={<OrderTracking />} />
        <Route path="/profile/*" element={<ProfileSettings />} />
        <Route path="/myorders" element={<MyOrder />} />
        <Route path="/view-order" element={<ViewOrder />} /> */}
        {/* ```` */}
      </Route>
    </Routes>
  );
}

export default App;
