import React from 'react'

function CreateUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <label>Name</label>
          <input type={'text'} className="form-control"></input>
        </div>

        <div className="col-lg-6">
          <label>E-mail</label>
          <input type={'text'} className="form-control"></input>
        </div>

        <div className="col-lg-4">
          <label>Country</label>
          <select className="form-control">
            <option>--Select--</option>
            <option>India</option>
            <option>America</option>
          </select>
        </div>

        <div className="col-lg-4">
          <label>State</label>
          <select className="form-control">
            <option>--Select--</option>
            <option>TamilNadu</option>
            <option>pondicheri</option>
          </select>
        </div>

        <div className="col-lg-4">
          <label>City</label>
          <select className="form-control">
            <option>--Select--</option>
            <option>chennai</option>
            <option>madurai</option>
          </select>
        </div>

        <div className="col-lg-3">
          <input
            type="submit"
            value="create"
            className="btn mt-1 btn-primary"
          />
        </div>
      </div>
    </div>
  )
}

export default CreateUser
