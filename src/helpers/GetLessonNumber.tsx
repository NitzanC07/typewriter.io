let ModuleNumber = 0;
let LessonNumber = 0;

const saveLessonNumer = (moduleNumber: number, lessonNumber: number) => {
    ModuleNumber = moduleNumber;
    LessonNumber = lessonNumber;
    console.log([ModuleNumber, LessonNumber]);  
};

const getLessonNumber = () => {
    return [ModuleNumber, LessonNumber];
};

const lessonHelper = {
    getLessonNumber,
    saveLessonNumer,
};

export default lessonHelper;