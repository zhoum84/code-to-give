import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import pdf from '../resources/examplewish.pdf'

function ViewForm() {
 const [forms, setForms] = useState([]);

 
 useEffect(() => {
   // Here you would add code to fetch the submitted forms from your server
   // and update the "forms" state with the results
   const fetchedForms = [
     {
       id: 1,
       firstName: 'Matthew',
       lastName: 'Zhou',
       Type: 'Child',
       message: '',
       date: '4/23/2023',
     },
    
  
   ];
   setForms(fetchedForms);
 }, []);

 const handleViewFormClick = (id) => {
   // Here you would add code to redirect the user to the URL for the form
   // ADD THE LINK TO THE FORM IF YOU WANT JOLIN/MATHEW
   window.open(`https://wish.org/sites/default/files/2020-10/Wish%20Paperwork%20Packet%20with%20Liability%20%20English%2062020%20%282%29.pdf`, '_blank');
 };

 const onButtonClick = () => {
  

}


 return (
   <div>
     <Sidebar />
     <Header />
     <div className='conformer' style={{ marginLeft: '600px' }}>
       <h1 style={{ marginTop: '1' }}>Submitted Forms</h1>
       {forms.length > 0 ? (
         <table>
           <thead>
             <tr>
               <th style={{ paddingRight: '20px' }}>ID</th>
               <th style={{ paddingRight: '20px' }}>Name</th>
               <th style={{ paddingRight: '20px' }}>Type of Form</th>
               <th style={{ paddingRight: '20px' }}>Date Submitted</th>
               <th>Actions</th>
             </tr>
           </thead>
           <tbody>
             {forms.map((form) => (
               <tr key={form.id}>
                 <td style={{ paddingRight: '20px' }}>{form.id}</td>
                 <td style={{ paddingRight: '20px' }}>{`${form.firstName} ${form.lastName}`}</td>
                 <td style={{ paddingRight: '20px' }}>{form.Type}</td>
                 <td style={{ paddingRight: '20px' }}>{form.date.toLocaleString()}</td>
                 <td>
                  <a href={pdf} download='form.pdf'>
                   <button >View Form</button>
                   </a>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       ) : (
         <p>No forms submitted yet.</p>
       )}
     </div>
   </div>
 );
}

export default ViewForm;


