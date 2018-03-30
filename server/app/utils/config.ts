import * as dotenv from 'dotenv';

export const Config = (() => {

    /**
     * @class {Config}
     */
    class ConfigClass {

        public port: string|number;

        constructor() {
            dotenv.config();

            this.port = process.env.PORT || 3000;
        }
    }

    return ConfigClass;
});

export default Config;