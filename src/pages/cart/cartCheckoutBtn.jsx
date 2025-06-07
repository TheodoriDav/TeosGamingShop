import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './cartCheckoutBtn.css'

const CartCheckoutBtn = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="container mt-5 auth-tabs-wrapper">
      {/* Tabs */}
      <ul className="nav nav-pills nav-justified mb-3 custom-narrow-nav" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}>
            Login
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}>
            Register
          </button>
        </li>
      </ul>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'login' && (
          <div className="tab-pane fade show active">
            <form>
              <h4 className="text-center mb-3">Login</h4>

              <div className="mb-2">
                <label htmlFor="loginEmail" className="form-label">Email or Username</label>
                <input type="email" className="form-control" id="loginEmail" />
              </div>

              <div className="mb-2">
                <label htmlFor="loginPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginPassword" />
              </div>

              <div className="mb-2 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              </div>

              <button type="submit" className="btn btn-primary w-100">Sign in</button>

              <div className="text-center mt-3">
                <a href="#!">Forgot password?</a>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div className="tab-pane fade show active">
            <form>
              <h4 className="text-center mb-3">Register</h4>

              <div className="mb-3">
                <label htmlFor="registerName" className="form-label">Name</label>
                <input type="text" className="form-control" id="registerName" />
              </div>

              <div className="mb-3">
                <label htmlFor="registerUsername" className="form-label">Username</label>
                <input type="text" className="form-control" id="registerUsername" />
              </div>

              <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="registerEmail" />
              </div>

              <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="registerPassword" />
              </div>

              <div className="mb-3">
                <label htmlFor="registerConfirmPassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="registerConfirmPassword" />
              </div>

              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartCheckoutBtn;