import { Request, Response } from 'express';

export const getRoute = (req: Request, res: Response) => {
  res.send('Hello World');
};
