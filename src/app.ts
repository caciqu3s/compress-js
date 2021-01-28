import express, { Application, Request, Response } from 'express';

require('./config/rabbit-mq')

const app: Application =  express();

app.get('/', (req: Request, res: Response) => res.send('hello'));

app.listen(8081, () => console.log('server running'));