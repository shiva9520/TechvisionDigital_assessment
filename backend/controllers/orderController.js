import Order from '../models/orderModel.js';
 
export const createOrder = async (req, res) => {
  try {
    const { customerName, email, phone, address, productId, productName, amount } = req.body;
    
    const newOrder = new Order({
      customerName,
      email,
      phone,
      address,
      productId,
      productName,
      amount
    });

    await newOrder.save();
    
    res.status(201).json({ success: true, order: newOrder, message: 'Order created successfully' });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, message: 'Failed to create order' });
  }
};
