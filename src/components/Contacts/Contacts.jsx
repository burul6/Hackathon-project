import React from "react";

const Contacts = () => {
  return (
    <div>
      <div class="container">
        <h1 class="brand">
          <span>Contact Us</span>
        </h1>

        <div class="wrapper">
          <div class="company-info">
            <h3>Our contacts: </h3>

            <ul>
              <li>
                <i class="fa fa-road"></i> 44 Main Street
              </li>
              <li>
                <i class="fa fa-phone"></i> (555) 555-5555
              </li>
              <li>
                <i class="fa fa-envelope"></i> test@phoenix.com
              </li>
            </ul>
          </div>

          <div class="contact">
            <h3>E-mail Us</h3>

            <form id="contact-form">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" required />
              </p>

              <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
              </p>

              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" required />
              </p>

              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>

              <p class="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message"></textarea>
              </p>

              <p class="full">
                <button type="submit">Submit</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
