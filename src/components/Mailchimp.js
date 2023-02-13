import React, { useEffect, useState } from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailchimpForm from './MailchimpForm';
import Form from 'react-bootstrap/form';
import './mailchimp.css'



const MailChimp = () => {

    const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

    return (
        <MailchimpSubscribe
            url={MAILCHIMP_URL}
            render={(props) => {
                const { subscribe, status, message } = props || {};
                return (
                    <MailchimpForm
                        status={status}
                        message={message}
                        onValidated={forData => subscribe(formData)}
                    />
                );
            }}
        />
    );
};


export default MailChimp


// action
// https://kineticfootwear.us14.list-manage.com/subscribe/post

// value
//  <input type="hidden" name="u" value="0f9e697f7f1e94fa630ca29e0">
// <input type="hidden" name="id" value="d76678587a"> 