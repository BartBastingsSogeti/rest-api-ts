export const Test = (() => {

    interface iParam {
        name: string;
    }

    /**
     * @class {Config}
     */
    class TestClass {

        constructor() {
            // @todo
        }

        public init(body: iParam) {
            return { name: body.name };
        }
    }

    return TestClass;
});

export default Test;