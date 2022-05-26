import React, { useEffect } from "react";
import Header from "./Header";
import { useState } from "react";
import Categories from "./extraComponents/Category";
import { useSelector, useDispatch } from "react-redux";
import { callTheApi } from "../redux/QuestionsSlice";

export default function Play() {
  const [allData, setAllData] = useState([]);
  let data = useSelector((state) => [state.data]);
  // some changes
  //   useEffect(() => {
  //     setAllData(data[0]);
  //   }, []);

  // Category Part
  const [categories, setCategories] = useState([]);
  const categoryList = [
    ...new Set(data[0]?.map((item) => item.category.title)),
  ];
  const [questions,setAllQuestions] = useState({})
  useEffect(() => {
    setCategories(categoryList);
    // after set all the categories i call the function to filter all
    // questions by balue
    allQuestions()
  }, []);


  // here im just iterating to get all the questionns by value
  //and im saving them in an object you will get and object with key as value
function allQuestions(){
    const allquestions = data[0].reduce((acc,question)=>{
      if(question.value in acc){
        acc[question.value].push(question)
      }else{
        acc[question.value] = [question]
      }
      return acc
    },{})
    setAllQuestions(allquestions)
}
  


  //   const [valueNumbers, setValueNumbers] = useState({});

  //   let newObj = {};
  //   let newNew = allQuestions.map(
  //     (el) => (newObj[el.category.title] = [el.value])
  //   );
  //   console.log(newObj);

  //   const values = allQuestions.map((item) => {
  //     if (item.category.title === "baseball") {
  //       setValues(...value, value[item.category.title] = Object.values(item.value));
  //     }
  //   });
  //   console.log(value, "values");

  //   let filtered = allQuestions.filter(
  //     (item) => item.category.title === categories
  //   );

  //   useEffect(() => {
  //     setValueNumbers(filtered);
  //   }, [categories]);

  //   let [selectedQ, setSelectedQ] = useState();

  return (
    <div>
      <Header />
      <Categories categories={categories} />
    </div>
  );
}
