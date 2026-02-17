/* ทำการ import http module เพื่อสร้าง server
const http = require('http');
const host = 'localhost';
const port = 8000;

// กำหนดค่าเริ่มต้นของ server เมื่อเปิดใช้งาน เว็บผ่านเบราว์เซอร์ที่ localhost:8000
const requestListener = function(req, res)
{
    res.writeHead(200);
    res.end('My First Server!');
}

// Run server
const server = http.createServer(requestListener);
server.listen(port, host, () =>
{
    console.log(`Server is running at http://${host}:${port}`);
}); */



// อันบนของเก่าอจให้ลบ แต่เก็บไว้อ่าน
// วันที่ 17/02/2026

const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const port = 8000

app.use(bodyParser.json());

let user = [];
let counter = 1;

// path = GET / ถ้าเป็นในนี้ก็จะเป็น /test (GET ดู)
app.get('/users', (req, res) =>
{
    /*let user = 
    {
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com'
    }
    //res.send('Hello World')*/
    res.json(user);
});

// path = POST /user (POST เพิ่ม)
app.post('/user', (req, res) =>
{
    let user = req.body;
    user.id = counter++;

    users.push(user);
    res.json
    ({
        message: 'User added successfully',
        user: user
    });
})

// path = PUT /user/:id (PUT แก้ | PATCH แก้อย่างเดียว มั้ง!)
app.patch('/user/:id', (req, res) =>
{
    let id = req.params.id;
    let updatedUser = req.body;

    // user จาก id ที่ส่งมา
    let seletedIndex = user.findIndex(user => user.id == id);

    // อัพเดตข้อมูล user
    if (updatedUser.name)
    {
        users[selectedIndex].name = updatedUser.name
    }
    if (updatedUser.email)
    {
        users[selectedIndex].email = updatedUser.email
    }

    // เอาข้อมูลที่ update ส่ง response กลับไป
    res.json
    ({
        message: 'User updated successfully',
        data: 
        {
            user: updatedUser,
            indexUpdated: selectedIndex
        }
    });
})

// path = DELETE /user/:id (DELETE ลบ)
app.delete('/user/:id', (req, res) =>
{
    let id = req.params.id;

    // หา index ของ user ที่ต้องการลบจาก id ที่ส่งมา
    let seletedIndex = user.findIndex(user => user.id == id);

    // ลบ user จาก array โดยใช้ delete
    user.splice(seletedIndex, 1);

    res.json
    ({
        message: 'User updated successfully',
            indexUpdated: selectedIndex
    });
})

app.listen(port, () =>
{
    console.log(`Server is running on port ${port}`)
})