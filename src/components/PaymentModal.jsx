import React, { useState } from 'react';
import { X, CreditCard, Smartphone } from 'lucide-react';

const PaymentModal = ({ isOpen, planName, planPrice, onClose, onPaymentSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  if (!isOpen) return null;

  const handlePaymentSubmit = () => {
    if (selectedMethod) {
      onPaymentSelect(selectedMethod);
      setSelectedMethod(null);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-2xl max-w-md w-full border border-white/10 p-8 animate-in fade-in zoom-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Select Payment Method</h2>
          <p className="text-slate-400">Complete your {planName} plan subscription</p>
        </div>

        {/* Plan Summary */}
        <div className="bg-slate-700/50 rounded-lg p-4 mb-8 border border-white/5">
          <div className="flex justify-between items-center">
            <span className="text-slate-300">{planName} Plan</span>
            <span className="text-white font-bold">{planPrice}/month</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4 mb-8">
          {/* Card Payment */}
          <button
            onClick={() => setSelectedMethod('card')}
            className={`w-full border-2 rounded-lg p-4 flex items-center transition-all ${
              selectedMethod === 'card'
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <CreditCard className={`w-6 h-6 mr-4 ${selectedMethod === 'card' ? 'text-blue-400' : 'text-slate-400'}`} />
            <div className="text-left">
              <p className={`font-semibold ${selectedMethod === 'card' ? 'text-white' : 'text-slate-300'}`}>
                Credit/Debit Card
              </p>
              <p className="text-xs text-slate-400">Visa, Mastercard, Amex</p>
            </div>
          </button>

          {/* UPI Payment */}
          <button
            onClick={() => setSelectedMethod('upi')}
            className={`w-full border-2 rounded-lg p-4 flex items-center transition-all ${
              selectedMethod === 'upi'
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-white/10 hover:border-white/20'
            }`}
          >
            <Smartphone className={`w-6 h-6 mr-4 ${selectedMethod === 'upi' ? 'text-blue-400' : 'text-slate-400'}`} />
            <div className="text-left">
              <p className={`font-semibold ${selectedMethod === 'upi' ? 'text-white' : 'text-slate-300'}`}>
                UPI Payment
              </p>
              <p className="text-xs text-slate-400">Google Pay, PhonePe, Paytm</p>
            </div>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 border border-white/10 text-white py-3 rounded-lg font-medium hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handlePaymentSubmit}
            disabled={!selectedMethod}
            className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
              selectedMethod
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-slate-600 text-slate-400 cursor-not-allowed'
            }`}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
