// server.js
import jsonServer from 'json-server';
import express from 'express'; // Предполагая, что вы также используете express

const server = jsonServer.create();
const router = jsonServer.router({}); // Замените 'db.json' на ваш фактический файл базы данных
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});
