import express from 'express';
import { registerSwaggerRoutes } from './swagger';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes';
import { FirestoreService } from './app/share/firebase';
import { CorsValidator } from './app/cors.validator';

const app = express();
const port = 8080;

app.use(CorsValidator.handleCors)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

RegisterRoutes(app);
registerSwaggerRoutes(app);

FirestoreService.getInstance().getAppInstance();

app.listen(port, () => console.log('Server is running on port ' + port));

