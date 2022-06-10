// server/index.js
import fetch from 'node-fetch';
import path from 'path';
import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

const response = await fetch('https://dashboard.cphsense.com/api/v2/groups/136/latest', {
        method: 'get',
        headers: {
        'Accept' : 'application/json',
        'Authorization' : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTQ4NTI3NzMsIm5iZiI6MTY1NDg1Mjc3MywianRpIjoiYmQ5ZWQxNzUtYTA3My00MjY2LTljYmYtZjAyZjAyOTdhZDNhIiwiZXhwIjoxNjU0ODk1OTczLCJpZGVudGl0eSI6Imphcm9uQGhvc3RlLm1lIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.aGzLQFDvVxPaeBV9NHJ_r4jNTX-4GsYOOjctqe2UH64'
        }
    });
const data = await response.json();

console.log(data);

app.get("/api", (req, res) => {
    res.json(data);
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

