import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import classes from './Payment.module.css';

const Payment = () => {
  const params = useParams();
  const navigate = useNavigate();

  const payHandler = () => {
    console.log(params.id)
    axios
      .post(`http://localhost:8080/pay?userId=${params.id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        // navigate(`${response}`);
        window.location = `http://${response.data}`;
      })
      .catch(function (error) {
        // handle error
        console.log(error)
        // window.location = `http://${error.config.url}`;
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <div className={classes.cont}>
      <div className={classes.row}>
        <div className={classes['col-75']}>
          <div className={classes.container}>
            <div>
              <div className={classes['col-50']}>
                <h3>Payment</h3>
                <label>Accepted Cards</label>
                <div className={classes['icon-container']}>
                  <i className={`${classes.x} fa fa-cc-visa`}></i>
                  <i className={`${classes.z} fa fa-cc-amex`}></i>
                  <i className={`${classes.c} fa fa-cc-mastercard`}></i>
                  <i className={`${classes.v} fa fa-cc-discover`}></i>
                </div>
              </div>

              <input
                type="submit"
                value="Pay with Paypal"
                className={classes.btn}
                onClick={payHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
