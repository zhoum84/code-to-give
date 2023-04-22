import Form from "../components/Form";
import {FormProvider} from '../context/FormContext'
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function FormPage() {
  return (
    <div className='marker'>
      <div>
        <Header />
        <Sidebar />
        <div className='conform'>
          <FormProvider>
              <Form />
          </FormProvider>
         </div>
      </div>
      
    </div>
  );
}

export default FormPage;
