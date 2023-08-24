import express, {
  Response as ExResponse,
  Request as ExRequest,
  NextFunction,
} from 'express';
import { registerSwaggerRoutes } from './swagger';
import bodyParser from 'body-parser';
import { RegisterRoutes } from './routes';
import { FirestoreService } from './app/share/firebase';

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

RegisterRoutes(app);
registerSwaggerRoutes(app);

FirestoreService.getInstance().getAppInstance();

app.listen(port, () => console.log('Server is running on port ' + port));

