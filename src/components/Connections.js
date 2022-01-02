import React from "react";

const Connections = ({ connection }) => {
  return (
    <div className="connections">
      {connection.map((c, index) => (
        <div key={`connection-col-${index}`}>
          {c.map((item, idx) => (
            <span
              className="has-text-weight-medium is-size-4"
              key={`connection-${idx}`}
            >
              {idx === c.length - 1 ? `${item}` : `${item} > `}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Connections;
