import React from 'react';

const FeatureCards = () => {
  const features = [
    { 
      title: 'Express Delivery', 
      subtitle: 'With selected items', 
      bg: 'bg-blue-400', 
      textColor: 'text-blue-400',
      icon: '🚀',
      buttonText: 'Save Now'
    },
    { 
      title: 'Cash On Delivery', 
      subtitle: 'With selected items', 
      bg: 'bg-teal-400', 
      textColor: 'text-teal-400',
      icon: '💰',
      buttonText: 'Save Now'
    },
    { 
      title: 'Gift Voucher', 
      subtitle: 'With special cart items', 
      bg: 'bg-pink-400', 
      textColor: 'text-pink-400',
      icon: '🎁',
      buttonText: 'Shop Coupons'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className={`${feature.bg} rounded-xl p-6 md:p-8 text-white relative overflow-hidden`}>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/90 text-sm md:text-base mb-4">{feature.subtitle}</p>
              <button className={`px-4 py-2 bg-white ${feature.textColor} rounded-lg hover:text-gray-800 transition-colors font-medium shadow-sm hover:shadow-md`}>
                {feature.buttonText}
              </button>
            </div>
            <div className="absolute right-2 bottom-2 md:right-4 md:bottom-4 text-4xl md:text-6xl opacity-80 md:opacity-100">
              {feature.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;