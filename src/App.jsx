import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import QuoteDetails from "./components/QuoteDetails";
import QuoteRequest from "./components/QuoteRequest";
import QuoteTerms from "./components/QuoteTerms";
import QuoteReview from "./components/QuoteReview";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<QuoteDetails />} />
        <Route path="/request" element={<QuoteRequest />} />
        <Route path="/terms" element={<QuoteTerms />} />
        <Route path="/review" element={<QuoteReview />} />
        </Routes>
      </Layout>
      </Router>
 
  );
};

export default App;




// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/quotes" element={<Quotes />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/inventory" element={<Inventory />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// };

// export default App;


