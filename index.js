var express = require('express');
var app = express();

// Routes
app.get('/', function (req, res) {
    res.json({ response: "Hello From Thetips4you" });
});

app.get('/will', function (req, res) {
    res.json({ response: "Hello World" });
});

app.get('/ready', function (req, res) {
    res.json({ response: "Great!, It works!" });
});

// Only start the server if this file is run directly (not in tests)
if (require.main === module) {
    app.listen(process.env.PORT || 4000, () => {
        console.log('Server running on port ' + (process.env.PORT || 4000));
    });
}

// Export the app for testing
module.exports = app;

