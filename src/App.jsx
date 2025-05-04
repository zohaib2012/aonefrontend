
import { Route, Routes } from "react-router-dom";
import Layout from "./reuseablecomponents/Layout";
import Home from "./component/Home";
import Login from "./reuseablecomponents/Login";
import Register from "./reuseablecomponents/Register";
import PersonalDetailsForm from "./component/Component(Admin)/PersonalDetailForm";
import ContactDetail from "./component/Component(Admin)/ContactDetail";
import Transferpayment from "./component/Component(Admin)/Transferpayment";
import Depositpaymentaccount from "./component/Component(Admin)/Depositpaymentaccount";
import DepositPaymentmethod from "./component/Component(Admin)/DepositPaymentmethod";
import Support from "./component/Component(Admin)/Support";
import Passwordsetting from "./component/Component(Admin)/updatepassword";
import OpenNewAccountType from "./component/Component(Admin)/OpenNewAccounttype";
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
// import { UsersList } from "./component/admin_pannel/UsersList";
import { Depositmoney } from "./component/admin_pannel/Depositmoney";
import { AllDocuments } from "./component/admin_pannel/AllDocuments";
// import { PersonalDetails } from "./component/admin_pannel/PersonalDetails";
// import { Residencialdocs } from "./component/admin_pannel/Residencialdocs";
import { Newlyopenedaccounts } from "./component/admin_pannel/Newlyopenedaccounts";
import { Displaymessages } from "./component/admin_pannel/Displaymessages";
import E_Verift_Forgetpassword from "./reuseablecomponents/E_Verift_Forgetpassword";
import C_verify_forgetpassword from "./reuseablecomponents/C_verify_forgetpassword";
import Forgetpasword from "./reuseablecomponents/Forgetpasword";
import UserDashboard from "./layout/UserDashboard";
import UserHome from "./User/Home";

// import PhoneVerification from "./component/Component(Admin)/Phoneverification";
import { RequireCompleteProfile, RequireIncompleteProfile } from "./utils/confirmation_model";



import Localbankacount from "./component/Component(Admin)/depositpaymentaccounts/Localbankacount";

import Creditcarddeposit from "./component/Component(Admin)/depositpaymentaccounts/Creditcarddeposit";
import Etheriumdeposit from "./component/Component(Admin)/depositpaymentaccounts/Etheriumdeposit";
import Binancedeposit from "./component/Component(Admin)/depositpaymentaccounts/Binancedeposit";
import Localbankdeposit from "./component/Component(Admin)/depositpaymentaccounts/Localbankdeposit";
import USDTdeposit from "./component/Component(Admin)/depositpaymentaccounts/USDTdeposit";
import BankTransactionconfirmation from "./component/Component(Admin)/depositpaymentaccounts/BankTransactionconfirmation";
import Skrilldeposit from "./component/Component(Admin)/depositpaymentaccounts/Skrilldeposit";
import Easypaisadeposit from "./component/Component(Admin)/depositpaymentaccounts/Easypaisadeposit";
import Jazzcashdeposit from "./component/Component(Admin)/depositpaymentaccounts/Jazzcashdeposit";
import Easypaisaaccount from "./component/Component(Admin)/depositpaymentaccounts/Easypaisaaccount";
import Jazzcashaccount from "./component/Component(Admin)/depositpaymentaccounts/Jazzcashaccount";
import Withdrawusdt from "./component/Component(Admin)/depositpaymentaccounts/Withdrawalusdt";
import Withdrawaleasypaisa from "./component/Component(Admin)/depositpaymentaccounts/Withdrawaleasypaisa";
import Withdrawaljazzcash from "./component/Component(Admin)/depositpaymentaccounts/Withdrawaljazzcash";
import Withdrawallocalbank from "./component/Component(Admin)/depositpaymentaccounts/Withdrawallocalbank";
import Withdrawalskrill from "./component/Component(Admin)/depositpaymentaccounts/Withdrawalskrill";
import Withdrawalbankaccount from "./component/Component(Admin)/depositpaymentaccounts/Withdrawalbankaccount";
import Withdrawaleasypaisaaccount from "./component/Component(Admin)/depositpaymentaccounts/Withdrawaleasypaisaaccount";
import Withdrawaljazzcashaccount from "./component/Component(Admin)/depositpaymentaccounts/Withdrawaljazzcashaccount";
import Withdrawalskrillaccount from "./component/Component(Admin)/depositpaymentaccounts/Withdrawalskrillaccount";
import Withdrawalusdtaccount from "./component/Component(Admin)/depositpaymentaccounts/Withdrawalusdtaccount";
import { Withdrawalrequests } from "./component/admin_pannel/Withdrawalrequests";



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

          <Route
            path="/profile/number/verification"
            element={<NumberVerification />}
          />
          
          <Route path="/$2b$10$BMiX4WDJ/dBNxQuQArG6G.p2SJp4lrNuHB/BSjqfAt$BMiX4WDJ/dBNxQuQArG6G.p2SJ/G6G.p2SJp4lrN" element={<Sidebar />} >
          
          <Route index element={<AllDocuments />} />
          <Route path="all/documents" element={<AllDocuments />} />
          
          <Route path="money/deposited" element={<Depositmoney />} />
          <Route path="messages" element={<Displaymessages />} />
          <Route path="opened/accounts" element={<Newlyopenedaccounts />}  />
          <Route path="withdrawal/requests" element={<Withdrawalrequests />}  />
          </Route>
          

          

          {/* <Route path="/all/residencial/documents" element={<Residencialdocs />}/> */}
          {/* <Route path="/users/list" element={<UsersList />} /> */}
          {/* <Route path="/all/personal/details" element={<PersonalDetails />} /> */}

          {/* User Dashboard  */}
          <Route path="/profile" element={<UserDashboard />}>
            <Route index element={<UserHome />} />
            <Route path="support" element={<Support />} />
            <Route path="password" element={<Passwordsetting />} />
            {/* <Route path="phone/verification" element={<PhoneVerification />} /> */}
            <Route element={<RequireIncompleteProfile />}>
              <Route path="personalDetail" element={<PersonalDetailsForm />} />
              <Route path="email/verification" element={<Emailverification />}  />
              <Route path="code/verification" element={<CodeVerification />} />
              <Route path="uploaddocunment" element={<Uploaddocunment />} />
              <Route path="verifyresidence" element={<VerifyResidence />} />
              <Route path="contactDetail" element={<ContactDetail />} />
            </Route>

            <Route element={<RequireCompleteProfile />}>
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





              <Route path="withdrawal" element={<Withdrawal />} >
                <Route index element={<Withdrawusdt />} />

                <Route path="usdt" element={<Withdrawusdt />} />
                <Route path="easypaisa" element={<Withdrawaleasypaisa />} />
                <Route path="jazzcash" element={<Withdrawaljazzcash />} />
                <Route path="localbank" element={<Withdrawallocalbank />} />
                <Route path="skrill" element={<Withdrawalskrill />} />

                <Route path="localbank/account" element={<Withdrawalbankaccount />} />
                <Route path="easypaisa/account" element={<Withdrawaleasypaisaaccount />} />
                <Route path="jazzcash/account" element={<Withdrawaljazzcashaccount />} />
                <Route path="skrill/account" element={<Withdrawalskrillaccount />} />
                <Route path="usdt/account" element={<Withdrawalusdtaccount />} />


              </Route>

              <Route path="wallet/deposit" element={<DepositPaymentmethod />}>
                <Route index element={<Withdrawusdt />} />
                {/* <Route index element={<BankTransferContent />} /> */}

                <Route path="localbank" element={<Localbankdeposit />} />
                <Route path="usdt" element={<USDTdeposit />} />
                <Route path="creditcard" element={<Creditcarddeposit />} />
                <Route path="etherium" element={<Etheriumdeposit />} />
                <Route path="binance" element={<Binancedeposit />} />
                <Route path="skrill" element={<Skrilldeposit />} />
                <Route path="easypaisa" element={<Easypaisadeposit />} />
                <Route path="jazzcash" element={<Jazzcashdeposit />} />

                <Route path="localbank/account" element={<Localbankacount />} />
                <Route path="easypaisa/account" element={<Easypaisaaccount />} />
                <Route path="jazzcash/account" element={<Jazzcashaccount />} />

                <Route path="transaction" element={<BankTransactionconfirmation />} />
              </Route>


              {/* <Route path="withdrawal" element={<Withdrawal />} /> */}
              <Route path="withdrawal/form" element={<WithdrawalForm />} />
              <Route path="trade" element={<TradingInterface />} />
              <Route path="Trading/Account/Table" element={<TradeTable />} />
              <Route path="open/new/account" element={<OpenNewAccountType />} />
              <Route path="joinus" element={<Joinus />} />
              <Route path="wallet/transfer" element={<Transferpayment />} />
            </Route>
          </Route>
        </Routes>
      </Layout>
    </div>
  );
};

export default App;