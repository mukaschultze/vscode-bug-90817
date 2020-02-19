// import { ClassB } from "./b"; // OK
// import { ClassB } from "./b.js"; // ends with .js

// import { simple } from "./simple.json";

export class ClassA {

    constructor() {
        // Use ctrl+space to open auto import below
        const b = new ClassB()

        // then uncomment the json import and auto import again
        // it imports `./b.js` instead of `./b` if there are json modules
        // being imported
    }

}