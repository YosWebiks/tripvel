import { RouterProvider } from 'react-router-dom';
import { routes } from './pages/routes';
import Navbar from './pages/Navbar';
import ExpenseForm from './pages/expennseForm/ExpenseForm';
import { useState } from 'react';
import { Button } from '@fluentui/react-components';

export default function App() {
  return (
    <>
      <Navbar />
      <ExpenseForm />
      <RouterProvider router={routes} />
    </>
  );
}
