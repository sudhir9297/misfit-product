import React from 'react';
import { SingleSwatchWrapper } from '../components';

function SwatchWrapper({ activeData, swatchData, handleSwatchClick }) {
  return (
    <div className="h-fit absolute z-20 w-full bottom-0 flex justify-center gap-8 mb-10  lg:w-fit lg:inset-y-80 lg:right-20 lg:flex-col">
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
