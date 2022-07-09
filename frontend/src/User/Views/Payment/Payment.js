import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Payment = () => {
    return(
       
    
      <div className="maincontainer">
        <div className="container">
          <div className="py-5 text-center">            
            <h2>Make a Payment </h2>
            <p className="lead">Find and select the relevant prices for the product</p>
          </div>
          <div className="row ">
            <div className="col-md-4 order-md-2 mb-4 ">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3 shadow-lg">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="prod1">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$35</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$15</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$50</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1 shadow-lg mb-4">
              <h4 className="mb-3">Shipping Details</h4>
              <form className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label for="email">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="enter your email " />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="address">Address</label>
                  <input type="text" className="form-control" id="address"  required />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2"  />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">Country</label>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="country"  required />
                    <div className="invalid-feedback">
                    Please enter your country.
                  </div>
                </div>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state">State</label>
                    <input type="text" className="form-control" id="state"  required />
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
                  <label className="form-check-label" for="flexSwitchCheckChecked">Billing address same as the shipping</label>
                </div>
                <hr className="mb-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="card-select my-3">               
                    <div className="payment-method custom-radio">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                      <label className="form-check-label ms-2" for="exampleRadios1">
                      Credi Card
                      </label>
                    </div>
                    <div className="payment-method custom-radio">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                      <label className="form-check-label ms-2" for="exampleRadios1" >Master Card</label>
                    </div>
                    <div className="payment-method custom-radio -">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                      <label className="form-check-label col-sm-8 ms-2" for="exampleRadios1">
                      Paypal
                      </label>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="cc-name">Name of the owner</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                    <div className="invalid-feedback"> 
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary btn-lg   mb-4 d-flex justify-content-end" type="button">checkout</button>
              </form>
            </div>
          </div>
        </div>
     
      </div>
      
    );
}

export default Payment