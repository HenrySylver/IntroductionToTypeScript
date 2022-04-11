
interface Course {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {

  execute({duration = 8, name, educator}: Course) {
    // this.print({name, duration, educator} as Course);
    console.log({name,duration,educator})
  }

  // print(course: Course) {
  //   console.log(course);
  // }

}

export default new CreateCourseService();