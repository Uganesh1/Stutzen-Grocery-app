import React from 'react';

const FeatureCards = () => {
  const features = [
    { 
      title: 'Express Delivery', 
      subtitle: 'With selected items', 
      bg: 'bg-blue-400', 
      icon: '🚀',
      buttonText: 'Save Now'
    },
    { 
      title: 'Cash On Delivery', 
      subtitle: 'With selected items', 
      bg: 'bg-teal-400', 
      icon: '💰',
      buttonText: 'Save Now'
    },
    { 
      title: 'Gift Voucher', 
      subtitle: 'With special cart items', 
      bg: 'bg-pink-400', 
      icon: '🎁',
      buttonText: 'Shop Coupons'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className={`${feature.bg} rounded-xl p-8 text-white relative overflow-hidden`}>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/90 mb-4">{feature.subtitle}</p>
              <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30">
                {feature.buttonText}
              </button>
            </div>
            <div className="absolute right-4 bottom-4 text-6xl ">
              {feature.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;