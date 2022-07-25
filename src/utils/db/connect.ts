import { connect } from 'mongoose';

export const connectToDB = async (DB_URL: string) => {
  try {
    await connect(DB_URL);
    console.log('connected To DB');
  } catch (err: any) {
    console.info('Unable to connect to DB');
    process.exit(1);
  }
};
