import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

//components
import Add from './components/add.js'
import Edit from './components/edit.js'

const App = () => {
   const [certificate, setCertificate] = useState([])
   const [successMessage, setSuccessMessage] = useState('')

   const getCertificate = () => {
      axios
         .get('https://localhost:3000/certificate/')
         .then(
            (response) => setCertificate(response.data),
            (error) => console.error(error)
         )
         .catch((error) => console.error(error))
   }

   const handleCreate = (addCertificate) => {
      axios
         .post('https://localhost:3000/certificate/', addCertificate)
         .then((response) => {
            console.log(addCertificate);
            setSuccessMessage(response.data.message)
            getCertificate()
         })
   }

   const handleDelete = (event) => {
      axios
         .delete('https://localhost:3000/certificate/' + event.target.value)
         .then((response) => {
            getCertificate()
         })
   }


   const handleUpdate = (editCertificate) => {
      axios
         .put('https://localhost:3000/certificate/' + editCertificate.certificate_id, editCertificate)
         .then((response) => {
            getCertificate()
         })
   }

   useEffect(() => {
      getCertificate()
   }, [])

   return(
      <>
         <h1>Certificate List</h1>

         <Add handleCreate={handleCreate} />

         <div className="certificates">
            {certificate.map((certificate) => {
               return(
                  <div key={certificate.certificate_id}>
                     <p><span>CName:</span> {certificate.cname}</p>
                     <p><span>vp:</span> {certificate.vp}</p>
                     <p><span>Application:</span> {certificate.application}</p>
                     <p><span>Issuer:</span> {certificate.issuer}</p>
                     <p><span>Expiration:</span> {certificate.expiration}</p>
                     <Edit handleUpdate={handleUpdate} certificate={certificate}/>
                     <button onclick={handleDelete} value={certificate.certificate_id}> Delete</button>
                  </div>
               )
            })}
         </div>

      </>
   )
}

export default App;
