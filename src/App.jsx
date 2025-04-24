import Layout from "./reuseablecomponents/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./reuseablecomponents/Login";
import Register from "./reuseablecomponents/Register";
import PersonalDetailsForm from "./component/Component(Admin)/PersonalDetailForm";
import ContactDetail from "./component/Component(Admin)/ContactDetail";
import Transferpayment from "./component/Component(Admin)/Transferpayment";
import Depositpaymentaccount from "./component/Component(Admin)/Depositpaymentaccount";
import DepositPaymentmethod from "./component/Component(Admin)/DepositPaymentmethod";
// import TransactionConfirmationForm from './component/Component(Admin)/TransactionConfirmationForm '
import Support from "./component/Component(Admin)/Support";
import Passwordsetting from "./component/Component(Admin)/updatepassword";
import OpenNewAccountType from "./component/Component(Admin)/OpenNewAccounttype";
// import TradingAccountsTable from './component/Component(Admin)/TradingAccountTable'
import Emailverification from "./component/Component(Admin)/Emailverification";
import NumberVerification from "./component/Component(Admin)/NumberVerification";
import Uploaddocunment from "./component/Component(Admin)/Uploaddocunment";
import ContactUs from "./component/ContactUs";
import TradingInterface from "./component/Component(Admin)/TradingInterface";
import VerifyResidence from "./component/Component(Admin)/VerifyResidence";
import Withdrawal from "./component/Component(Admin)/Withdrawal";
import WithdrawalForm from "./component/Component(Admin)/withdrawalform";
import TransactionConfirmationForm from "./component/Component(Admin)/TransactionConfirmationForm ";
import CodeVerification from "./component/Component(Admin)/Codeverification";
import Joinus from "./component/Component(Admin)/Joinus";
import { TradeTable } from "./component/Component(Admin)/TradeTable";
import { Sidebar } from "./component/admin_pannel/sidebar";
import { UsersList } from "./component/admin_pannel/UsersList";
import { Depositmoney } from "./component/admin_pannel/Depositmoney";
import { AllDocuments } from "./component/admin_pannel/AllDocuments";
import { PersonalDetails } from "./component/admin_pannel/PersonalDetails";
import { Residencialdocs } from "./component/admin_pannel/Residencialdocs";
import { Newlyopenedaccounts } from "./component/admin_pannel/Newlyopenedaccounts";
import { Displaymessages } from "./component/admin_pannel/Displaymessages";
import E_Verift_Forgetpassword from "./reuseablecomponents/E_Verift_Forgetpassword";
import C_verify_forgetpassword from "./reuseablecomponents/C_verify_forgetpassword";
import Forgetpasword from "./reuseablecomponents/Forgetpasword";
import UserDashboard from "./layout/UserDashboard";
import UserHome from "./User/Home";

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/verify/email" element={<E_Verift_Forgetpassword />} />
          <Route path="/verify/code" element={<C_verify_forgetpassword />} />
          <Route path="/password/forget" element={<Forgetpasword />} />


          <Route path="/profile/number/verification" element={<NumberVerification />} />

         
          <Route path="/data" element={<Sidebar />} />
          <Route path="/users/list" element={<UsersList />} />
          <Route path="/money/deposited" element={<Depositmoney />} />
          <Route path="/all/documents" element={<AllDocuments />} />
          <Route path="/all/personal/details" element={<PersonalDetails />} />
          <Route
            path="/all/residencial/documents"
            element={<Residencialdocs />}
          />
          <Route
            path="/all/newlyopened/accounts"
            element={<Newlyopenedaccounts />}
          />
          <Route path="/all/messages" element={<Displaymessages />} />

          {/* User Dashboard  */}
          <Route path="/profile" element={<UserDashboard />}>
            <Route index element={<UserHome />} />
            <Route path="support" element={<Support />} />
            <Route path="personalDetail" element={<PersonalDetailsForm />} />
            <Route
              path="wallet/deposit/method"
              element={<DepositPaymentmethod />}
            />
            <Route
              path="wallet/deposit/account"
              element={<Depositpaymentaccount />}
            />
            <Route
              path="wallet/deposit/money"
              element={<TransactionConfirmationForm />}
            />
            <Route path="verifyresidence" element={<VerifyResidence />} />
            <Route path="withdrawal" element={<Withdrawal />} />
            <Route path="withdrawal/form" element={<WithdrawalForm />} />
            <Route path="trade" element={<TradingInterface />} />
            <Route path="Trading/Account/Table" element={<TradeTable />} />
            <Route path="password" element={<Passwordsetting />} />
            <Route path="open/new/account" element={<OpenNewAccountType />} />
            <Route path="email/verification" element={<Emailverification />} />
            <Route path="code/verification" element={<CodeVerification />} />
            <Route path="uploaddocunment" element={<Uploaddocunment />} />

            <Route path="joinus" element={<Joinus />} />
            <Route path="wallet/transfer" element={<Transferpayment />} />
            <Route path="contactDetail" element={<ContactDetail />} />
          </Route>

        </Routes>
      </Layout>
    </div>
  );
};

export default App;
