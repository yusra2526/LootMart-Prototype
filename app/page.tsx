"use client";
import React, { useState } from 'react';
import { Package, Smartphone, Shirt, Sofa, Dumbbell, Sparkles, Baby, Truck, CheckCircle, XCircle } from 'lucide-react';

import Header from './LandingPage/Header';
import LocationBar from './LandingPage/LocationBar';
import CategoriesBar from './LandingPage/CategoriesBar';
import FeaturesBanner from './LandingPage/FeaturesBanner';
import ProductsGrid from './LandingPage/ProductsGrid';
import Footer from './LandingPage/Footer';
import CartModal from './LandingPage/CartModal';
import WishlistModal from './LandingPage/WishListModal';
import ProfileModal from './LandingPage/ProfileModal';
import OrdersModal from './LandingPage/OrdersModal';
import SettingsModal from './LandingPage/SettingsModal';
import CheckoutModal from './LandingPage/CheckoutModal';
import LocationModal from './LandingPage/LocationModal';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  stock: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface User {
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  address: string;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: number;
  products: string[];
}

interface Category {
  id: string;
  name: string;
  icon: any;
}

const LootMart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [selectedLocation, setSelectedLocation] = useState('Rawalpindi, Punjab');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditAddress, setShowEditAddress] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  
  // Form states
  const [newAccountData, setNewAccountData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  
  const [editProfileData, setEditProfileData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [editAddressData, setEditAddressData] = useState({
    address: '',
    city: ''
  });
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  const categories: Category[] = [
    { id: 'all', name: 'All Products', icon: Package },
    { id: 'electronics', name: 'Electronics', icon: Smartphone },
    { id: 'fashion', name: 'Fashion', icon: Shirt },
    { id: 'home', name: 'Home & Living', icon: Sofa },
    { id: 'beauty', name: 'Beauty', icon: Sparkles },
    { id: 'sports', name: 'Sports', icon: Dumbbell },
    { id: 'baby', name: 'Baby & Kids', icon: Baby },
  ];

  const cities: string[] = [
    'Karachi, Sindh',
    'Lahore, Punjab',
    'Islamabad',
    'Rawalpindi, Punjab',
    'Faisalabad, Punjab',
    'Multan, Punjab',
    'Peshawar, KPK',
    'Quetta, Balochistan',
    'Sialkot, Punjab',
    'Gujranwala, Punjab',
    'Hyderabad, Sindh',
    'Bahawalpur, Punjab',
  ];

  const allProducts: Product[] = [
    { id: 1, name: 'Premium Smartphone X12', price: 45999, category: 'electronics', rating: 4.5, image: '📱', stock: 15 },
    { id: 2, name: 'Wireless Earbuds Pro', price: 3499, category: 'electronics', rating: 4.8, image: '🎧', stock: 30 },
    { id: 3, name: 'Designer Kurta Collection', price: 2999, category: 'fashion', rating: 4.3, image: '👔', stock: 20 },
    { id: 4, name: 'Leather Formal Shoes', price: 4999, category: 'fashion', rating: 4.6, image: '👞', stock: 12 },
    { id: 5, name: 'Modern Coffee Table', price: 8999, category: 'home', rating: 4.4, image: '🪑', stock: 8 },
    { id: 6, name: 'Premium Bedsheet Set', price: 3499, category: 'home', rating: 4.7, image: '🛏️', stock: 25 },
    { id: 7, name: 'Luxury Skincare Kit', price: 2499, category: 'beauty', rating: 4.5, image: '💄', stock: 18 },
    { id: 8, name: 'Professional Yoga Mat', price: 1999, category: 'sports', rating: 4.2, image: '🧘', stock: 22 },
    { id: 9, name: 'Smart Watch Ultra', price: 12999, category: 'electronics', rating: 4.7, image: '⌚', stock: 10 },
    { id: 10, name: 'Winter Jacket Premium', price: 5999, category: 'fashion', rating: 4.4, image: '🧥', stock: 14 },
    { id: 11, name: 'Baby Stroller Deluxe', price: 15999, category: 'baby', rating: 4.8, image: '👶', stock: 6 },
    { id: 12, name: 'Gaming Console Pro', price: 54999, category: 'electronics', rating: 4.9, image: '🎮', stock: 5 },
  ];

  const myOrders: Order[] = [
    { id: 'ORD-2024-001', date: '2024-11-05', status: 'delivered', total: 48999, items: 2, products: ['📱', '🎧'] },
    { id: 'ORD-2024-002', date: '2024-11-08', status: 'shipped', total: 12999, items: 1, products: ['⌚'] },
    { id: 'ORD-2024-003', date: '2024-11-09', status: 'processing', total: 8999, items: 1, products: ['🪑'] },
  ];

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const toggleWishlist = (product: Product) => {
    if (wishlist.find(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some(item => item.id === productId);
  };

  const addWishlistToCart = (product: Product) => {
    addToCart(product);
    setWishlist(wishlist.filter(item => item.id !== product.id));
  };

  const handleLogin = () => {
    setUser({
      name: 'Ahmed Khan',
      email: 'ahmed.khan@email.com',
      phone: '0300-1234567',
      joinDate: 'January 2024',
      address: 'House 123, Street 5, Satellite Town'
    });
    setIsLoggedIn(true);
    setShowProfile(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowProfile(false);
    setShowSettings(false);
    setShowOrders(false);
  };
  
  const handleCreateAccount = () => {
    if (newAccountData.password !== newAccountData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!newAccountData.name || !newAccountData.email || !newAccountData.phone || !newAccountData.password) {
      alert('Please fill all fields!');
      return;
    }
    
    setUser({
      name: newAccountData.name,
      email: newAccountData.email,
      phone: newAccountData.phone,
      joinDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      address: 'Not set'
    });
    setIsLoggedIn(true);
    setShowCreateAccount(false);
    setNewAccountData({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
    alert('Account created successfully!');
  };
  
  const handleEditProfile = () => {
    if (!editProfileData.name || !editProfileData.email || !editProfileData.phone) {
      alert('Please fill all fields!');
      return;
    }
{/*    
    setUser({
      ...user,
      name: editProfileData.name,
      email: editProfileData.email,
      phone: editProfileData.phone
    });
    setShowEditProfile(false);
    alert('Profile updated successfully!');
*/}
  };
  
  const handleEditAddress = () => {
    if (!editAddressData.address || !editAddressData.city) {
      alert('Please fill all fields!');
      return;
    }
    
{/*
    setUser({
      ...user,
      address: editAddressData.address
    });
*/}
    setSelectedLocation(editAddressData.city);
    setShowEditAddress(false);
    alert('Address updated successfully!');
  };
  
  const handleChangePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      alert('New passwords do not match!');
      return;
    }
    if (!passwordData.currentPassword || !passwordData.newPassword) {
      alert('Please fill all fields!');
      return;
    }
    
    setPasswordData({ currentPassword: '', newPassword: '', confirmNewPassword: '' });
    setShowChangePassword(false);
    alert('Password changed successfully!');
  };

  const closeAllModals = () => {
    setShowCart(false);
    setShowWishlist(false);
    setShowProfile(false);
    setShowLocation(false);
    setShowSettings(false);
    setShowOrders(false);
    setShowCheckout(false);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const deliveryFee = cartTotal >= 1999 ? 0 : 150;
  const expressDeliveryFee = expressDelivery ? 300 : 0;
  const finalTotal = cartTotal + deliveryFee + expressDeliveryFee;

  const getOrderStatus = (status: string) => {
    switch(status) {
      case 'delivered': return { text: 'Delivered', color: 'text-green-600', bg: 'bg-green-100', icon: CheckCircle };
      case 'shipped': return { text: 'Shipped', color: 'text-blue-600', bg: 'bg-blue-100', icon: Truck };
      case 'processing': return { text: 'Processing', color: 'text-orange-600', bg: 'bg-orange-100', icon: Package };
      default: return { text: 'Cancelled', color: 'text-red-600', bg: 'bg-red-100', icon: XCircle };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartCount}
        wishlist={wishlist}
        isLoggedIn={isLoggedIn}
        user={user}
        showCart={showCart}
        setShowCart={setShowCart}
        showWishlist={showWishlist}
        setShowWishlist={setShowWishlist}
        showProfile={showProfile}
        setShowProfile={setShowProfile}
        closeAllModals={closeAllModals}
      />

      <LocationBar
        selectedLocation={selectedLocation}
        showLocation={showLocation}
        setShowLocation={setShowLocation}
        closeAllModals={closeAllModals}
      />

      <CategoriesBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <FeaturesBanner />

      <ProductsGrid
        selectedCategory={selectedCategory}
        categories={categories}
        searchQuery={searchQuery}
        filteredProducts={filteredProducts}
        addToCart={addToCart}
        toggleWishlist={toggleWishlist}
        isInWishlist={isInWishlist}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
      />

      <Footer selectedLocation={selectedLocation} />

      <CartModal
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
        cartCount={cartCount}
        cartTotal={cartTotal}
        deliveryFee={deliveryFee}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        setShowCheckout={setShowCheckout}
        closeAllModals={closeAllModals}
      />

      <WishlistModal
        showWishlist={showWishlist}
        setShowWishlist={setShowWishlist}
        wishlist={wishlist}
        addWishlistToCart={addWishlistToCart}
        toggleWishlist={toggleWishlist}
      />

      <ProfileModal
        showProfile={showProfile}
        setShowProfile={setShowProfile}
        isLoggedIn={isLoggedIn}
        user={user}
        wishlist={wishlist}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        showOrders={showOrders}
        setShowOrders={setShowOrders}
        showWishlist={showWishlist}
        setShowWishlist={setShowWishlist}
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        closeAllModals={closeAllModals}
      />

      <OrdersModal
        showOrders={showOrders}
        setShowOrders={setShowOrders}
        myOrders={myOrders}
        getOrderStatus={getOrderStatus}
        isLoggedIn={isLoggedIn}
      />

      <SettingsModal
        showSettings={showSettings}
        setShowSettings={setShowSettings}
        user={user}
        selectedLocation={selectedLocation}
        notifications={notifications}
        setNotifications={setNotifications}
        isLoggedIn={isLoggedIn}
      />

      <CheckoutModal
        showCheckout={showCheckout}
        setShowCheckout={setShowCheckout}
        isLoggedIn={isLoggedIn}
        user={user}
        selectedLocation={selectedLocation}
        expressDelivery={expressDelivery}
        setExpressDelivery={setExpressDelivery}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        cartCount={cartCount}
        cartTotal={cartTotal}
        deliveryFee={deliveryFee}
        expressDeliveryFee={expressDeliveryFee}
        finalTotal={finalTotal}
      />

      <LocationModal
        showLocation={showLocation}
        setShowLocation={setShowLocation}
        cities={cities}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
    </div>
  );
};

export default LootMart;