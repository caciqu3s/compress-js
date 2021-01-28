import amqp from 'amqplib/callback_api';
import { downloadFile, uploadFile } from '../service/aws-service';
import { compressFile } from '../service/ffmpeg-service';

const CONN_URL = 'amqp://localhost';
const QUEUE = 'video-uploaded';
const EXCHANGE = 'Videos';

amqp.connect(CONN_URL, (err, conn) => {
  conn.createChannel((err, ch) => {
    ch.assertExchange(EXCHANGE, 'direct', {
        durable: true
    });

    ch.assertQueue(QUEUE, {
        durable: false
    });

    ch.bindQueue(QUEUE, EXCHANGE, '');
  
    ch.consume(QUEUE, async (msg) => {
      const key = msg ? msg.content.toString() : '';
        uploadFile(await compressFile(await downloadFile(key)), key);
    },{ noAck: true });
  });
});