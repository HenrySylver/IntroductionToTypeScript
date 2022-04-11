"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const createCourseService_1 = __importDefault(require("./createCourseService"));
function createCourse(request, response) {
    createCourseService_1.default.execute({
        duration: 10,
        name: "NodeJS",
        educator: "Henry"
    });
    createCourseService_1.default.execute({
        name: "ReactJS",
        educator: "Ibs"
    });
    return response.send();
}
exports.createCourse = createCourse;
