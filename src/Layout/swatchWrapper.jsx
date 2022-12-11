import React from 'react';
import { SingleSwatchWrapper } from '../components';

function SwatchWrapper({
  activeData,
  swatchData,
  handleSwatchClick,
  condition,
}) {
  const handleSwatchClicked = (id) => {
    if (condition) return;

    handleSwatchClick(id);
  };

  return (
    <div className="h-fit absolute z-20 w-full bottom-0 flex justify-center gap-8 mb-2  lg:w-fit lg:inset-y-[40%] lg:right-20 lg:flex-col">
      {swatchData.map((o) => (
        <SingleSwatchWrapper
          key={o.id}
          item={o}
          handleClick={handleSwatchClicked}
          activeID={activeData.id}
        />
      ))}
    </div>
  );
}

export default SwatchWrapper;
