import './App.css'
import {ApolloProvider} from "@apollo/client";
import client from './apollo.ts'
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout.tsx';
import Router from './router/Router.tsx';
import { ThemeProvider } from './layout/layout.context.tsx';
import { AuthProvider } from './context/auth.context.tsx';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </AuthProvider>
        </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
