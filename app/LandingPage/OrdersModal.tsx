"use client";

import React from 'react';
import { Package, X, Clock, LucideIcon } from 'lucide-react';

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: number;
  products: string[];
}

interface OrderStatus {
  text: string;
  color: string;
  bg: string;
  icon: LucideIcon;
}

interface OrdersModalProps {
  showOrders: boolean;
  setShowOrders: (show: boolean) => void;
  myOrders: Order[];
  getOrderStatus: (status: string) => OrderStatus;
  isLoggedIn: boolean;
}

const OrdersModal: React.FC<OrdersModalProps> = ({
  showOrders,
  setShowOrders,
  myOrders,
  getOrderStatus,
  isLoggedIn,
}) => {
  if (!showOrders || !isLoggedIn) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-opacity-50 z-40"
        onClick={() => setShowOrders(false)}
      />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black bg-white rounded-lg shadow-2xl p-6 z-50 w-full max-w-2xl max-h-96 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-xl flex items-center gap-2">
            <Package size={24} className="text-orange-500" />
            My Orders
          </h3>
          <button onClick={() => setShowOrders(false)}>
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          {myOrders.map(order => {
            const status = getOrderStatus(order.status);
            const StatusIcon = status.icon;
            return (
              <div key={order.id} className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">{order.id}</h4>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <Clock size={14} />
                      {order.date}
                    </p>
                  </div>
                  <div className={`${status.bg} ${status.color} px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                    <StatusIcon size={16} />
                    {status.text}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  {order.products.map((emoji, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-orange-100 to-yellow-100 p-2 rounded">
                      <span className="text-2xl">{emoji}</span>
                    </div>
                  ))}
                  <span className="text-sm text-gray-600">+{order.items} item(s)</span>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t">
                  <span className="font-bold text-orange-600">Rs {order.total.toLocaleString()}</span>
                  <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OrdersModal;