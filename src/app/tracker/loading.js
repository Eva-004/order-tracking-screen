import React from 'react';
  import { PulseLoader } from "react-spinners";

const Loading = () => {
    return (
      <div className='max-w-7xl mx-auto text-center'>
        <PulseLoader color="#36d7b7" />
      </div>
    );
};

export default Loading;