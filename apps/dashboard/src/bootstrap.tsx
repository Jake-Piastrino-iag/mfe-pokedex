import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "mfe-ui-components/dist/output.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const Bootstrap = () => {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Bootstrap />, document.getElementById("root"));
