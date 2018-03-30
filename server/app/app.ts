import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';

export const App = (() => {

    /**
     * @class {App}
     */
    class AppClass {

        /**
         * @param {Application} express;
         */
        public express: express.Application;


        /**
         * constructor
         * @param {string|number} port
         */
        constructor(port: string|number) {
            this.express = express();
            this.express.set('port', port);
            this.middleware();
        }

        /**
         * middleware
         */
        private middleware(): void {
            this.express.use(bodyParser.json);
            this.express.use(bodyParser.urlencoded({ extended: true }));
        }

        public addPostEndpoint(endpoint: string, Response: any) {

            const router = express.Router();
            const responseClass = new Response();

            router.post(`/${endpoint}`, (req, res, next) => {

                const response = responseClass.inti();

                response.then((data: any) => {
                    res.json(data);
                }).catch(next);
            });
            this.express.use('/', router);
        }

        public listen() {
            this.express.listen(this.express.get('port'), () => {
                console.log(('App is running at http://localhost:%d in %s mode'), this.express.get('port'), this.express.get('env'));
                console.log('Press CTRL-C to stop\n');
            });
        }
    }

    return AppClass;
});

export default App;