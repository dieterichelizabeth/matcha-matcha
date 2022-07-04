import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// --- Components/Pages --- //
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import OrderHistory from "./pages/OrderHistory";
import Signup from "./pages/Signup";
import Success from "./pages/Success";
import Catalog from "./pages/Catalog";

// ---- Apollo/Graphql Setup ---- //

// Apollo Client Middleware
// establish a new link to the GraphQL server at its "/graphql" endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

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

function App() {
  return (
    // Give the application access to the server's API data
    // Pass the client variable as the value for the client pop in the Apollo Provider
    <ApolloProvider client={client}>
      <div>
        <Router>
          <div>
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
              <Route path="/products/:id" element={<Detail />} />
              <Route path="/success" element={<Success />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
