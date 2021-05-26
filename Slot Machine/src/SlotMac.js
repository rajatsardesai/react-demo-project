import React from 'react';

export const SlotMac = (props) => {

  let { x, y, z } = props;

  if ((x === y) && (y === z)) {
    return (
      <>
        <div className="mt-5">
          <h5 className="text-center">
            {x}{y}{z}
          </h5>
          <h5 className="text-center">This is Matching.</h5>
          <hr />
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className="mt-5">
          <h5 className="text-center">
            {x}{y}{z}
          </h5>
          <h5 className="text-center">This is not Matching.</h5>
          <hr />
        </div>
      </>
    )
  }
}
