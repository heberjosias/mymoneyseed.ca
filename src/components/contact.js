import React from 'react';
import { Form, InputSubmit} from '../components/ui/General';

const Contact = () => {  
    return ( 
        <Form id="contact">
        <h2>Are you interested in taking any of our free workshops?</h2>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name*"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email*"
            />
            <label htmlFor="name">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone*"
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City, State, Province*"
            />  
          </div>   
          <InputSubmit
            type="submit"
            value="Send"
          />                         
        </form>
      </Form>
     );
}
 
export default Contact;
