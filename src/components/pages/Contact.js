
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="container mt-5">
        <div>Contact me</div>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="name" className="form-label">Name</label>
            <input type="text" className="form-control" required/>
          </div>
  
        </form>
      </div>
    </>
  );
}
