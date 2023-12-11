import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "./utils/store";

// ------ Components/Pages ------ //
import Nav from "./components/Nav";
import Home from "./pages/Home/index";
import Shop from "./pages/Shop/index";
import Blog from "./pages/Blog/index";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login/index";
import NoMatch from "./pages/NoMatch/index";
import OrderHistory from "./pages/OrderHistory/index";
import Signup from "./pages/Signup/index";
import Success from "./pages/Success";

// ---------------------------- Apollo/Graphql Setup ----------------------------- //
// Middleware - establish a new link to the GraphQL server at its "/graphql" endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Add Json Web Token to headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Apollo Client: constructor function to initialize the connection to the GraphQL API server
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//---- ApolloProvider:
// https://www.apollographql.com/docs/react/get-started/
// Give the application access to the server's API data
// Pass the client variable as the value for the client prop in the Apollo Provider
//---- Provider:
// https://react-redux.js.org/api/provider
// Give the application access to the Redux store
// Pass the store variable

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Provider store={store}>
            <div>
              <Nav />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/orderHistory" element={<OrderHistory />} />
                <Route path="/products/:id" element={<ProductPage />} />
                <Route path="/success" element={<Success />} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </div>
          </Provider>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
