const people = [
    {name: "Ludka", age: 21, gender: "F", seniority: "J"}, {name: "Kamil", age: 33, gender: "M", seniority: "M"}, {name: 'Marian', age: 33, gender: "M", seniority: "M"}
]
//calculate average age of people
const averageAge = (people) => {

}

//group people by gender
// final result should look like this:
// {
//      male: [
//          {name: "Kamil", age: 33, gender: "M", seniority: "M"}, {name: 'Marian', age: 33, gender: "M", seniority: "M"}
//      ],
//      female: [
//          {name: "Ludka", age: 21, gender: "F", seniority: "J"}
//      ]
// }
const groupByGender = (people) => {

}

//group people by seniority
// final result should look like this:
// {
//      medior: [
//            {name: "Kamil", age: 33, gender: "M", seniority: "M"}, {name: 'Marian', age: 33, gender: "M", seniority: "M"}
//      ],
//      junior: [
//           {name: "Ludka", age: 21, gender: "F", seniority: "J"}
//      ]
// }
const groupBySeniority = (people) => {

}




test("Function [people] is working correctly", () => {
    expect(averageAge(people)).toEqual(29)
})

test("Function [groupByGender] is working correctly", () => {
    const expectedResult = {
      male: [
          {name: "Kamil", age: 33, gender: "M", seniority: "M"}, {name: 'Marian', age: 33, gender: "M", seniority: "M"}
      ],
      female: [
          {name: "Ludka", age: 21, gender: "F", seniority: "J"}
      ]
    }
    expect(groupByGender(people)).toEqual(expectedResult)
})
test("Function [groupBySeniority] is working correctly", () => {
    const expectedResult = {
          medior: [
                {name: "Kamil", age: 33, gender: "M", seniority: "M"}, {name: 'Marian', age: 33, gender: "M", seniority: "M"}
          ],
          junior: [
               {name: "Ludka", age: 21, gender: "F", seniority: "J"}
          ]
    }
    expect(groupBySeniority(people)).toEqual(expectedResult)
})
