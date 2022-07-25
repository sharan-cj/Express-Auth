import express from 'express';
import { connectToDB } from './utils/db/connect';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import config from './config';
const app = express();

// connect to db
const DB_URL = config.LOCAL ? config.DEV_DB_URL : config.PROD_DB_URL;
connectToDB(DB_URL);

// sessions
const store = MongoStore.create({
  mongoUrl: DB_URL,
  ttl: 1000 * 60 * 60 * 24 * 7, // week
  collectionName: 'cookieSessions',
});

app.use(
  session({
    secret: 'keepSummerSafe',
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7, // week
    },
    store: store,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
