import app from './app';
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server started @ ${PORT}`);
});
