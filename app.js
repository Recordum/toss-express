const { default: axios } = require('axios');
const express = require('express');
const path = require('path');

const app = express();

// EJS 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('payment');
});

app.get('/success', (req, res) => {
    const paymentKey = req.query.paymentKey;
    const orderId = req.query.orderId;
    const amount = req.query.amount;
    const paymentType = req.query.paymentType;

    console.log("Payment Key:", paymentKey);
    console.log("Order ID:", orderId);
    console.log("Amount:", amount);
    console.log("Payment Type:", paymentType);

    const data = {
        paymentKey: paymentKey,
        orderId: orderId,
        amount: amount
    }

    // axios.post('http://localhost:3000/order/complete', data)
    // .then(response => {
    //     console.log(response.data);
    // })
    // .catch(error => {
    //     console.error("Error:", error);
    // });
    res.send('Payment successful!');
});

app.get('/fail', (req, res) => {
    // 결제 실패 로직을 여기에 작성합니다.
    res.send('Payment failed.');
});

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
