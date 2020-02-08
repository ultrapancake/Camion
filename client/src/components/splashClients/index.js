import React from "react";
import "./style.css";

const Clients = () => {
  return (
    <div className="clientsContainer">
      <h2 className="client-h2">Lorem ipsum dolor sit amet</h2>
      <div className="clientsTextContainer">
        <p className="client-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          efficitur, justo et dictum vehicula, tortor justo ultrices enim,
          aliquet tincidunt justo urna id arcu. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Donec vehicula
          cursus molestie. Cras molestie ligula eros, a ultrices nibh feugiat
          ut. Proin eget aliquam sapien. Vestibulum lobortis felis viverra nisi
          tincidunt volutpat. Maecenas eu purus odio. Maecenas lobortis auctor
          neque, quis sollicitudin elit suscipit malesuada. Donec quis justo
          eget augue vulputate tristique. Maecenas eget tellus scelerisque,
          eleifend felis facilisis, aliquet sem. Suspendisse feugiat eros ac
          imperdiet blandit. Duis egestas est in libero facilisis, non ultrices
          urna sodales. Vivamus ut dapibus ipsum, vitae elementum metus. Donec
          vulputate turpis enim, et scelerisque est consectetur nec. Mauris
          lacinia tempor mattis.
        </p>
        <button type="button" className="btn btn-primary client-btn">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Clients;
