import React from 'react';
import { Clock } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="bg-primary-700 text-white py-2 px-4">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center text-sm gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-center sm:text-left">Mon - Fri: 9:00 - 19:00 / Closed on Weekends</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="text-accent-300">Email: beanlabofc@gmail.com | Instagram: @beanlab_official</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;