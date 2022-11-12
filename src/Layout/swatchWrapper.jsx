import React from 'react';
import { SingleSwatchWrapper } from '../components';

function SwatchWrapper({ activeData, swatchData, handleSwatchClick }) {
  return (
    <div className="h-fit absolute z-20 inset-y-80 right-0 flex flex-col gap-8 mr-20">
      {swatchData.map((o) => (
        <SingleSwatchWrapper
          key={o.id}
          item={o}
          handleClick={handleSwatchClick}
          activeID={activeData.id}
        />
      ))}
    </div>
  );
}

export default SwatchWrapper;
