import React from "react";

const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Full Name" className="input" />
      <input type="text" placeholder="Email" className="input" />
      <input type="text" placeholder="Phone Number" className="input" />
      <textarea placeholder="Message" className="textarea mb-2" />

      <button className="btn self-start" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default Form;
