"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration = 8, name, educator }) {
        // this.print({name, duration, educator} as Course);
        console.log({ name, duration, educator });
    }
}
exports.default = new CreateCourseService();
