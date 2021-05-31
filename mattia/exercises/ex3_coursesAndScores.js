'use strict'

function Exam(code,name,cfu,score,honors,datePassed){
    this.code = code;
    this.name = name;
    this.cfu = cfu;
    this.score = score;
    this.honors = honors;
    this.datePassed = datePassed;
}




function ExamList(){
    this.exams = []; //usig this. exams is like a "public" variable
    //let exams = []; //using let exams is like a "private" variable and it is not visible outside this scope
    /** 
     * adding exams in the ExamList object
     * @param exam the exam to be added in the exams list 
     *  */
    this.add = (exam) => {this.exams.push(exam);};
    /**
     * 
     * @param  {*} course_code I want find in the list of the exams
     * @returns undefined if there are 0 or more than 1 exams with that code
     */
    this.find = (course_code) => {
            const result = this.exams.filter((ex) => ex.code == course_code);
            if(result.length==1)
                return result[0];
            else
                return undefined; 
                //UPDATE: throws an exception when there are more than 1 exams in the list with the same code 
        }; 
    this.afterDate = (date) => {
        const result = this.exams.filter((ex)=> ex.datePassed>date);
        return result;
    }
    this.listByDate = () => {
        const result = this.exams.sort((ex1,ex2) => ex1.date - ex2.date );
        return result;
    }
    this.average = () => {
        const weightedScoreTot = this.exams.reduce((acc,ex) => acc+(ex.score*ex.cfu) , 0);
        const cfuTot = this.exams.reduce((acc,ex)=>acc+ex.cfu , 0);
        const avg = weightedScoreTot/cfuTot;
        return avg;
    }

}

const wa1 = new Exam('01FXY','Web Applications I',6,28,false,'2021-03-08');
const db = new Exam('01ANC','Data Science and Stuff',8,25,false,'2021-02-06');

console.log(wa1);
console.log(db);
const myExams = new ExamList() ;
myExams.add(wa1);
myExams.add(db);
console.log(myExams);
console.log("finding the 01FXY course: ");
console.log(myExams.find('01FXY'));
console.log(myExams.listByDate());
console.log(myExams.afterDate('2021-03-06'));
console.log(myExams.average());

debugger;