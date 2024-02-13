const course = {
    courseName: "JS in Hindi",
    price: 999,
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor} = course // destructuring of Object
const {courseInstructor:instructure} = course
// console.log(courseInstructor);
console.log(instructure);


// {
//     "name1": "Huraira",
//     "course1": "JS in Hindi", // api in object
//     "price": "free"
// }


// [
//     {},    // api in array
//     {},
//     {}
// ]