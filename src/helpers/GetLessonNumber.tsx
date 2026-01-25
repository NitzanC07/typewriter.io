let ModuleNumber = 0;
let LessonNumber = 0;

const saveLessonNumber = (moduleNumber: number, lessonNumber: number) => {
    ModuleNumber = moduleNumber;
    LessonNumber = lessonNumber;
};

const getLessonNumber = () => {
    return [ModuleNumber, LessonNumber];
};

const lessonHelper = {
    getLessonNumber,
    saveLessonNumber,
};

export default lessonHelper;