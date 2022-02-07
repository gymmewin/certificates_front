import React, { useState } from 'react'

const Add = (props) => {
   const [certificate, setCertificate] = useState({cname: '', vp: '', application: '', issuer: '', expiration: ''})

   const handleChange = (event) => {
      setCertificate({...certificate, [event.target.name]:event.target.value})
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      props.handleCreate(certificate)
      setCertificate({cname: '', vp: '', application: '', issuer: '', expiration: ''})
   }

   return(
      <>
         <h3 className="mt-3">Add A Certificate</h3>
         <form onSubmit={handleSubmit} className="mt-3">
            <label htmlFor="cname">CName: </label>
            <input type="text" className="form-control" name="cname" value={certificate.cname} onChange={handleChange}/>
            <label htmlFor="vp">vp: </label>
            <input type="text" className="form-control" name="vp" value={certificate.vp} onChange={handleChange}/>
            <label htmlFor="application">Application: </label>
            <input type="text" className="form-control" name="application" value={certificate.application} onChange={handleChange}/>
            <label htmlFor="issuer">Issuer: </label>
            <input type="text" className="form-control" name="issuer" value={certificate.issuer} onChange={handleChange}/>
            <label htmlFor="expiration">Expiration: </label>
            <input type="text" className="form-control" name="expiration" value={certificate.expiration} onChange={handleChange}/>
            <br/>
            <input type="submit" className="btn btn-outline-success mr-3"/>

            
         </form>
      </>
   )
}

export default Add
