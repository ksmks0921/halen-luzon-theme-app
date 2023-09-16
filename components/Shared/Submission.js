import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Loader from "./Loader";
import axios from "axios";

export function Invalid() {
  return (
    <h6 style={{ border: "solid 3px #ff3333", backgroundColor: "#ffeeee", color: "#cc3333", padding: "5px", marginBottom: "50px" }}><center>Input is invalid.</center></h6>
  );
}

export function normalizeInput(value, previousValue) {
  // return nothing if no value
  if (!value) return value; 

  // only allows 0-9 inputs
  const currentValue = value.replace(/[^\d]/g, '');
  const cvLength = currentValue.length; 

  if (!previousValue || value.length > previousValue.length) {

    // returns: "x", "xx", "xxx"
    if (cvLength < 4) return currentValue; 

    // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
    if (cvLength < 7) return `(${currentValue.slice(0, 3)})${currentValue.slice(3)}`; 

    // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
    return `(${currentValue.slice(0, 3)})${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`; 
  }
};

export function validate(filedState) {
  let input = filedState;
  let errors = [];
  let isValid = true;

  if(input!= undefined && input["table"] != undefined && (input["table"] == "Customers" || input["table"] == "Drivers" || input["table"] == "Investors")) {
    // Check for valid first name
    if (input["fname"] != undefined && input["fname"].length < 2) {
      isValid = false;
      errors.push("Please enter valid first name");
    }

    // Check for valid last name
    if(input["lname"] != undefined && input["lname"].length < 2) {
        isValid = false;
        errors.push("Please enter valid last name");
    }

    // Check for valid email
    if (input["email"] != undefined && input["email"].length == 0) {
        isValid = false;
        errors.push("Please enter valid email");
    }

    // Check for valid phone number
    if(input["phoneNumber"] != undefined) {
      var patternPhone = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i);
      if (!patternPhone.test(input["phoneNumber"]) || !(input["phoneNumber"].length <= 13 && input["phoneNumber"].length > 9)) {
          isValid = false;
          errors.push("Please enter valid phone number.");
      }
    }

    // Check for valid phone number
    if(input["amount"] != undefined) {
      var patternAmount = new RegExp(/^((\$?)([0-9]{0,9})(\.?)\d{0,2}|[0-9]{0,9})$/);
      if (!patternAmount.test(input["amount"]) || input["amount"].length == 0) {
          isValid = false;
          errors.push("Please enter valid amount.");
      }
    }
    
    // Check for valid city
    if (input["city"] != undefined && input["city"].length < 3) {
        isValid = false;
        errors.push("Please enter valid city");
    }

    // Check for valid county
    if (input["county"] != undefined && input["county"].length < 3) {
        isValid = false;
        errors.push("Please enter valid county");
    }

    // Check for valid state
    if (input["state"] != undefined && input["state"].length < 2) {
        isValid = false;
        errors.push("Please enter valid state");
    }
    
    // Check for valid consent
    if (input["consent"] != undefined && input["consent"] == false) {
      isValid = false;
      errors.push("Please check the consent");
    }

  } else {
    isValid = false;
    errors.push(`We are not accepting this form yet, please try again later.`);
  }

  if(!isValid) {
    let containerRef = document.getElementById("signup-errors");
    ReactDOM.render(<Failure errors={errors}/>, containerRef);
    containerRef.scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );
  }
  return isValid;
}

export function Success() {
  return (
    <div className="login-form">
      <center><img
        src="/images/success.png"
        alt="success icon"
        style={{
          backgroundSize: "contain",
          width: "40%",
        }}
      /></center><br /><br />
      <h1 style={{ color: "#A2B937" }}><center>SUCCESS!</center></h1>
      <h4>We received your information. We'll be in touch shortly!</h4>
    </div>
  );
}

export function Failure(props) {
  const listErrors = props.errors.map((error) =>
  <li>{error}</li>);
  return (
    <h6 style={{ border: "solid 3px #ff3333", backgroundColor: "#ffeeee", color: "#cc3333", padding: "5px", marginBottom: "50px" }}>
      <center>The form couldn't submit because of the following errors.</center>
      <ul>{listErrors}
      </ul>
    </h6>
    );
}

export async function Submission(event, fields) {
  event.preventDefault();
  if(!validate(fields)) {
    return;
  }

  // validate captcha token
  grecaptcha.ready(function() {    
    grecaptcha.execute("6LdiNc8kAAAAAPjQjPSclY7IdHHmwcs5DVoqr684", {action: 'submit'})
    // grecaptcha.execute("6LeFobwkAAAAAATzirWsA_A9gH_b8aArLCvaiIso", {action: 'submit'})
    .then(function(token) {
      var loadingTemp = "true";
      if (typeof window !== 'undefined')
        ReactDOM.render(<Loader loading={loadingTemp} />, document.getElementsByClassName("signup-section ptb-100")[0]);
              // const headers = {
              //   'Content-Type': 'application/json',
              //   'x-api-key': "T6C4K9E5gKaizXclwosrh7UY9RKXG4Ze6jxaS6I2",
              //   'recaptcha_token': token
              // }
              
              // axios.post(`https://u4vf9x7zm2.execute-api.us-east-1.amazonaws.com/prod/v1/insights`,
              // // axios.post(`https://35ibqvz6oe.execute-api.us-east-1.amazonaws.com/dev/v1/insights`,
              //   dataJSON(fields),{
              //     headers: headers
              //   })
              //   .then(function (response) {
              //     loadingTemp = "false";
              //     if (typeof window !== 'undefined') {
              //       let containerRef = document.getElementsByClassName("signup-section ptb-100")[0];
              //       ReactDOM.render(<Success />, document.getElementsByClassName("signup-section ptb-100")[0]);
              //       containerRef.scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );
              //     }
              //   })
              //   .catch(function (error) {
              //     loadingTemp = "false";
              //     let errors = [];
              //     errors.push("Internal error and Unable to submit data at this time!");
              //     if (typeof window !== 'undefined') {
              //       let containerRef = document.getElementsByClassName("signup-section ptb-100")[0];
              //       ReactDOM.render(<Failure errors={errors}/>, containerRef);
              //       containerRef.scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );
              //     }
              //   });



                const portalId = '24330100'; // example portal ID (not real)
                const formGuid = 'b763e663-e208-4aeb-87b6-fb9a9fd5fc1a'; // example form GUID (not real)
                const config = { // important!
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
            
                axios.post(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
                  {
                    portalId,
                    formGuid,
                    fields: [
                      {
                        name: 'firstname',
                        value: fields.fname,
                      },
                      {
                          name: 'lastname',
                          value: fields.lname,
                      },
                      {
                        name: 'email',
                        value: fields.email,
                      },
                      {
                          name: 'phone',
                          value: fields.phoneNumber,
                      },
                      {
                          name: 'amount_investing',
                          value: fields.amount,
                      },

                    ],
                  },
                  config
                ).then(function (response) {
                  loadingTemp = "false";
                  if (typeof window !== 'undefined') {
                    let containerRef = document.getElementsByClassName("signup-section ptb-100")[0];
                    ReactDOM.render(<Success />, document.getElementsByClassName("signup-section ptb-100")[0]);
                    containerRef.scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );
                  }
                })
                .catch(function (error) {
                  loadingTemp = "false";
                  let errors = [];
                  errors.push("Internal error and Unable to submit data at this time!");
                  if (typeof window !== 'undefined') {
                    let containerRef = document.getElementsByClassName("signup-section ptb-100")[0];
                    ReactDOM.render(<Failure errors={errors}/>, containerRef);
                    containerRef.scrollIntoView( { behavior: "smooth", block: "end", inline: "nearest" } );
                  }
                });
                
          });
    });
}





function dataJSON(fields) {
  let data;
  
  switch(fields.table) {
    case "Inquiries":
      data = {
        }
      break;
    case "Investors":
      data = {
        "audienceType": "Investor",
        "city": "",
        "country": "USA",
        "county": "",
        "email": fields.email,
        "firstName": fields.fname,
        "lastName": fields.lname,
        "phone": fields.phoneNumber,
        "investorDetails": {
          "amount": fields.amount.replace('$','')
        },
        "state": "",
        "street1": ""
       };
      break;
    case "Customers":
      data = {
        "audienceType": "Customer",
        "city": "",
        "country": "USA",
        "county": "",
        "email": fields.email,
        "firstName": fields.fname,
        "lastName": fields.lname,
        "phone": fields.phoneNumber,
        "state": "",
        "street1": ""
        };
      break;
    case "Drivers":
      data = {
        "audienceType": "Driver",
        "city": fields.city,
        "country": "USA",
        "county": fields.county,
        "email": fields.email,
        "firstName": fields.fname,
        "lastName": fields.lname,
        "phone": fields.phoneNumber,
        "state": fields.state,
        "street1": ""
       };
      break;
  }
  
  return data;
}
