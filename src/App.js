import React from "react"
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from "./Config/gql_config";

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <h2>My first  🚀</h2>
    </div>
  </ApolloProvider>
  );
}

export default App;
