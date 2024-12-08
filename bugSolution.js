const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... asynchronous operation to fetch user data ...
    //Simulate async operation
    const user = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (userId === 'error') reject(new Error('User not found'));
          else resolve({ id: userId, name: `User ${userId}` });
        }, 500);
    });
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Error fetching user');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));