import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apolloClient";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)
