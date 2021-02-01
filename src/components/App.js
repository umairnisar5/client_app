import React from "react"
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from "../Config/gql_config";
import Students from "./Students";

function App() {
  return (
    <ApolloProvider client={client}>
    <Students />
  </ApolloProvider>
  );
}

export default App;
