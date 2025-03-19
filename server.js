const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/is-it-odd/api/:number', (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number)) {
        return res.json({ error: "Invalid number" });
    }

    const isOdd = number % 2 !== 0;
    const isEven = !isOdd;

    res.json({
        number: number,
        odd: isOdd,
        even: isEven,
        state: isOdd ? "odd" : "even"
    });
});

const PORT = 2137;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});