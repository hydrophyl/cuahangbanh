import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { OrderProvider } from "./contexts/appContext.jsx";
import InfoPage from "./components/infoPage.jsx";
import OrderPage from "./components/orderPage.jsx";
import ReceiptPage from "./components/receiptPage.jsx";
import "./styles.css";

const App = () => {
  return (
    <OrderProvider>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={InfoPage} />
            <Route path="/order" component={OrderPage} />
            <Route path="/receipt" component={ReceiptPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </OrderProvider>
  );
};

export default App;
