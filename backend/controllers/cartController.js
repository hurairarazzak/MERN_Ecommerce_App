import User from '../models/userModel.js';

// add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        const userData = await User.findById(userId);
        let cartData = userData.cartData || {}; // Ensure cartData exists

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        await User.findByIdAndUpdate(userId, { cartData }); // Update user's cartData
        res.json({ success: true, message: 'Item added to cart', cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        const userData = await User.findById(userId);
        let cartData = userData.cartData || {}; // Ensure cartData exists

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }
        cartData[itemId][size] = quantity;

        await User.findByIdAndUpdate(userId, { cartData }); // Update user's cartData
        res.json({ success: true, message: 'Cart updated', cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// get user cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        const userData = await User.findById(userId);
        const cartData = userData.cartData || {}; // Ensure cartData exists

        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addToCart, updateCart, getUserCart }