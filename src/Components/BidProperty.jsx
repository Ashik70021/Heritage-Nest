import { useState } from "react";

const BidProperty = () => {
  const [minValue, setMinValue] = useState(100);
  const [maxValue, setMaxValue] = useState();

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue);
    setMaxValue(value);
  };

  const handleSliderChange = (e) => {
    const [min, max] = e.target.value.split(',').map(Number);
    setMinValue(min);
    setMaxValue(max);
  };

  return (
    <div className="p-6 mt-[75px] mb-8 max-w-md mx-auto bg-[#ECF5FF] rounded-md shadow-md space-y-4">
      <div>
        <h2 className="text-md font-norlam text-[#6B7280] mb-2">Property Value</h2>
        <p className="text-2xl font-bold mb-2">$ 300k - $ 310k</p>
        <p className="text-[#6B7280] mb-4">Your bid cannot be more than 10% of the property minimum value.</p>
      </div>
      <div>
        <label className="block text-[#252323]">Min</label>
        <input
          type="number"
          value={minValue}
          onChange={handleMinChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EE6611] focus:border-[#EE6611] sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-[#252323]">Max</label>
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EE6611] focus:border-[#EE6611] sm:text-sm"
        />
      </div>
      <div className="flex items-center space-x-4">
        <span>${minValue}k</span>
        <input
          type="range"
        //   value={`${minValue}, ${maxValue}`}
        
          onChange={handleSliderChange}
          className="flex-1 "
        />
        <span>${maxValue}k</span>
      </div>
      <button className="mt-12 container mx-auto bg-[#0059B1] text-white py-2 px-4 rounded-md">Bid Property</button>
    </div>
  );
};

export default BidProperty;
