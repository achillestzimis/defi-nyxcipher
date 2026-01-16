import React, { useContext } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Staking from './components/pages/staking';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {

  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient} >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="staking" element={<Staking />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
