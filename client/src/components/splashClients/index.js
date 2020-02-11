import React from "react";
import "./style.css";

const Clients = () => {
  return (
    <div className="clientsContainer mt-5">
      <h2 className="client-h2">About Camion</h2>
      <div className="clientsTextContainer">
        <p className="client-p">
          Shipping materials over the road has relied on the
          supplier-broker-carrier relationship for decades. Recently, disruptive
          technologies have tried to remove the broker from the process to
          increase competition, drive down costs, and simplify the shipping
          process. Camion leverages the proven, tested function of the broker in
          the supplier/carrier chain, providing the same user experience that
          recent disruptive technologies advertise (ease of use, increased
          competition) while improving the efficiency of the broker’s role – to
          worry about the details and respond to unexpected surprises.
        </p>
      </div>
    </div>
  );
};

export default Clients;
