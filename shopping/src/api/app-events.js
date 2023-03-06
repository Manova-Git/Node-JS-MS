const ShoppingService = require('../services/shopping-service');

module.exports = (app) => {

    const service = new ShoppingService();

    // below method can be called from other services(Shopping service) like /customer/app-events for wishlist/cart/order operations
    app.use('/app-events', async (req, res, next) => {

        const {payload} = req.body;

        service.SubscribeEvents(payload);

        console.log("================== Shopping service received event================");
        return res.status(200).json(payload);
    });
};