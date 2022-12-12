import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import TransactionForm from "../../components/TransactionForm";
import TransactionList from "../../components/TransactionList";

const Home = () => {
  const { data } = useQuery(QUERY_ME);
  const userInfo = data?.me || [];
  return (
    <main>
      <div className="container">
        <div className="row">
          <TransactionForm userInfo={userInfo} />
          <TransactionList />
        </div>
      </div>
    </main>
  );
};

export default Home;

// old codes
// function Home() {
//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <form className="transaction-form p-4">
//               <h3 className="cap">Hi,</h3>
//               <h4>
//                 <span>Balance:</span>
//                 <span>$</span>
//               </h4>
//               <input type="hidden" name="current-user" value="" />
//               <input type="hidden" name="current-balance" value="" />
//               <div className="row">
//                 <div className="mb-3">
//                   <label for="recipient" className="form-label"></label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="recipient"
//                     placeholder="Transfer to"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label for="transfer-amount" className="form-label"></label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="transfer-amount"
//                     placeholder="Amount"
//                   />
//                 </div>
//                 <div className="form-group mb-3">
//                   <button type="submit" className="btn btn-success w-100">
//                     Transfer
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="col-8 text-center">
//             <div className="col">
//               <div className="m-4">
//                 <div id="debit-transaction">
//                   You paid
//                   <span className="cap">recipient</span>
//                   on date
//                 </div>
//                 <div id="credit-transaction">
//                   <span class="cap">recipient</span>
//                   paid you $ credit on
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
