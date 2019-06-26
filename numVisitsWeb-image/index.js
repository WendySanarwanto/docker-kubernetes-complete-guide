const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({
    host: 'redis-server',
    port: 6379
});
// console.log(`[debug] redisClient: \n`, redisClient);
redisClient.set('visits', 0);

app.get(`/`, (req, res) => {
    // console.log(`[debug][get /] is called !`);
    redisClient.get(`visits`, (err, visits) => {
        console.log(`[debug][get /] visits: ${visits}`);
        // res.send(`<h2><Number of visits is ${visits}/h2>`);
        res.send(`Number of visits is ` + visits);
        redisClient.set('visits', parseInt(visits) + 1);
    });
});

app.listen(3000, () => {
    console.log(`numVisitsWeb is running at port 3000 ...`);
});
