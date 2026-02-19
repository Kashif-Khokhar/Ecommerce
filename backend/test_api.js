const axios = require('axios');

async function testApi() {
    try {
        const regData = {
            username: "testuser_" + Date.now(),
            email: `test_${Date.now()}@example.com`,
            password: "password123"
        };

        console.log("Testing Registration...");
        const regRes = await axios.post('http://localhost:5000/api/auth/register', regData);
        console.log("Registration Success:", regRes.data);

        console.log("Testing Login...");
        const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
            username: regData.username,
            password: regData.password
        });
        console.log("Login Success, Token:", loginRes.data.accessToken);

        const token = loginRes.data.accessToken;

        console.log("Testing Fetch Products...");
        const productsRes = await axios.get('http://localhost:5000/api/products');
        console.log("Products Fetched:", productsRes.data.length);

    } catch (err) {
        console.error("API Test Failed:");
        if (err.response) {
            console.error("Status:", err.response.status);
            console.error("Data:", err.response.data);
        } else {
            console.error(err.message);
        }
    }
}

testApi();
