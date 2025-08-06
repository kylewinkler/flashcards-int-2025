import './App.css'
import {ApolloProvider} from "@apollo/client";
import client from './apollo.ts'
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout.tsx';
import Router from './router/Router.tsx';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
  </ApolloProvider>
  )
}

export default App
