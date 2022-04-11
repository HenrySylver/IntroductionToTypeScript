import { Request, Response } from 'express';
import CreateCourseService from './createCourseService';

export function createCourse(request: Request, response: Response) {
  
  CreateCourseService.execute({
    duration: 10,
    name: "NodeJS",
    educator: "Henry"
  });

  CreateCourseService.execute({
    name: "ReactJS",
    educator: "Ibs"
  });

  return response.send();
}
