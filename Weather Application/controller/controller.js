const axios = require('axios');
const bodyParser = require('body-parser');
// const path = require('path')

const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayno = new Date().getDay();

const getMethod = async (req, res) => {
    try {
        //   const response = await axios.get('api.openweathermap.org/data/2.5/forecast?q==Katraj&unit=metric&appid=66fa27c38771baf87f2a14946dd965d9');
        const response = await axios.get('https://api.tomorrow.io/v4/weather/forecast?location=narhe&apikey=Nje7WrPOEtQp0k2es4zl1C9BQJvq1wH4');
        const content = response.data;
        res.render('index.ejs', { data: content, day: day, dayno: dayno });
    }
    catch (err) {
        console.log(err.message);
    }
}

const postCity = async (req, res) => {
    try {
        //   const response = await axios.get('api.openweathermap.org/data/2.5/forecast?q==Katraj&unit=metric&appid=66fa27c38771baf87f2a14946dd965d9');
        const response = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${req.body.cityName}&apikey=Nje7WrPOEtQp0k2es4zl1C9BQJvq1wH4`);
        const content = response.data;
        res.render('index.ejs', { data: content, day: day, dayno: dayno });
    }
    catch (err) {
        popup.alert({
            content: 'Location not found!'
        });
        res.redirect("http://localhost:8080/");
    }
}

module.exports = { getMethod, postCity }