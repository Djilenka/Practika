const express = require('express');  
const mysql = require('mysql');  
const app = express();  
const PORT = process.env.PORT || 3000;  

// Настройка подключения к базе данных  
const db = mysql.createConnection({  
    host: 'localhost',  
    user: 'ваш_пользователь', // ваш пользователь MySQL  
    password: 'ваш_пароль',    // ваш пароль MySQL  
    database: 'ваша_база_данных' // имя вашей базы данных  
});  

db.connect((err) => {  
    if (err) {  
        throw err;  
    }  
    console.log('Подключено к базе данных.');  
});  

// Обработчик для получения новостей  
app.get('/api/news', (req, res) => {  
    const sql = 'SELECT * FROM news'; // Ваш SQL-запрос  
    db.query(sql, (err, results) => {  
        if (err) {  
            res.status(500).send(err);  
        } else {  
            res.json(results);  
        }  
    });  
});  

// Запуск сервера  
app.listen(PORT, () => {  
    console.log(`Сервер запущен на http://localhost:${PORT}`);  
});