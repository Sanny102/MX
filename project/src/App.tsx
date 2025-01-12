import React, { useState } from 'react';
import { Bike, Paintbrush, Package, Truck } from 'lucide-react';

type BikeModel = {
  brand: string;
  models: string[];
};

const bikeModels: BikeModel[] = [
  {
    brand: 'Honda',
    models: ['CRF450R', 'CRF250R', 'CRF150R'],
  },
  {
    brand: 'Yamaha',
    models: ['YZ450F', 'YZ250F', 'YZ125', 'YZ85', 'YZ65'],
  },
  {
    brand: 'KTM',
    models: ['450 SX-F', '250 SX-F', '125 SX', '85 SX', '65 SX', '50 SX'],
  },
  {
    brand: 'Kawasaki',
    models: ['KX450', 'KX250', 'KX112', 'KX85', 'KX65'],
  },
  {
    brand: 'Suzuki',
    models: ['RM-Z450', 'RM-Z250', 'RM85'],
  },
  {
    brand: 'GasGas',
    models: ['MC 450F', 'MC 250F', 'MC 125', 'MC 85', 'MC 65', 'MC 50'],
  },
  {
    brand: 'Stark',
    models: ['VARG 450', 'VARG 250', 'VARG 125'],
  },
  {
    brand: 'Husqvarna',
    models: ['FC 450', 'FC 250', 'TC 125', 'TC 85', 'TC 65', 'TC 50'],
  }
];

const colorOptions = [
  '#FF0000', '#00FF00', '#0000FF', '#FFFF00',
  '#FF00FF', '#00FFFF', '#FFA500', '#800080',
];

function App() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [step, setStep] = useState(1);

  const handleColorSelect = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else if (selectedColors.length < 3) {
      setSelectedColors([...selectedColors, color]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bike className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">MotoGraphix Pro</h1>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>1</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>2</div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>3</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-xl p-6">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Select Your Bike</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {bikeModels.map((bike) => (
                    <button
                      key={bike.brand}
                      onClick={() => setSelectedBrand(bike.brand)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedBrand === bike.brand
                          ? 'border-blue-600 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-400'
                      }`}
                    >
                      <img
                        src={`https://source.unsplash.com/400x300/?motorcycle,${bike.brand.toLowerCase()}`}
                        alt={bike.brand}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                      <p className="font-semibold text-center">{bike.brand}</p>
                    </button>
                  ))}
                </div>
              </div>

              {selectedBrand && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Select Model</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {bikeModels
                      .find((b) => b.brand === selectedBrand)
                      ?.models.map((model) => (
                        <button
                          key={model}
                          onClick={() => setSelectedModel(model)}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            selectedModel === model
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-200 hover:border-blue-400'
                          }`}
                        >
                          {model}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              {selectedModel && (
                <button
                  onClick={() => setStep(2)}
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue to Design
                </button>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Customize Your Graphics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Choose Colors (Max 3)</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        onClick={() => handleColorSelect(color)}
                        className={`w-12 h-12 rounded-full border-4 ${
                          selectedColors.includes(color)
                            ? 'border-blue-600'
                            : 'border-transparent'
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3">Preview</h3>
                  <div className="aspect-video bg-white rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Paintbrush className="w-12 h-12 mx-auto mb-2" />
                      <p>Graphics preview will appear here</p>
                    </div>
                  </div>
                </div>
              </div>

              {selectedColors.length > 0 && (
                <button
                  onClick={() => setStep(3)}
                  className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue to Checkout
                </button>
              )}
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Bike Details</h3>
                    <p>Brand: {selectedBrand}</p>
                    <p>Model: {selectedModel}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Selected Colors</h3>
                    <div className="flex space-x-2">
                      {selectedColors.map((color) => (
                        <div
                          key={color}
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-4">What's Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Package className="w-6 h-6 text-blue-600" />
                      <p>Your design will be prepared by our team</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Truck className="w-6 h-6 text-blue-600" />
                      <p>Production time: 5-7 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Place Order
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;