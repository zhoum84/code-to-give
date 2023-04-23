import Form from "../components/Form";
import {FormProvider} from '../context/FormContext'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import React from 'react';

function FormPage() {
  return (
    <div className='marker'>
        <Header />
        <Sidebar />
        <div className='conform'>
          <FormProvider>
              <Form />
          </FormProvider>
         </div>
    </div>
  );
}

export default FormPage;