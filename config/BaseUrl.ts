const api = "PfCXZQ2llkW9DGAEIxBW0udMsvX3vhr2HSAHLJVo";
export default function Url(limit:number,category:string,difficulty:string,apiKey=api){
    return `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${limit}&category=${category}&difficulty=${difficulty}`;
}