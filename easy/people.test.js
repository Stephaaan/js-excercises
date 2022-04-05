const people = [
    {name: "Peter", age: 17, gender: "M", seniority: "J"},{name: "Ludka", age: 21, gender: "F", seniority: "J"}, {name: "Kamil", age: 33, gender: "M", seniority: "M"}, {name: 'Marian', age: 33, gender: "M", seniority: "M"}
]
//filter all mediors (seniority = M)
const filterMediors = (people) => {

}

//Marian and Peter have birthday today! Add them one year
const birthday = (people) => {

}
//return all names (array of only names) which have more than 5 characters
const names = (people) => {
    
}



test("Function [filterMediors] is working correctly", () => {
    const expectedResult = [
        {name: "Kamil", age: 33, gender: "M", seniority: "M"}, {name: 'Marian', age: 33, gender: "M", seniority: "M"}
    ]
    expect(filterMediors(people)).toEqual(expectedResult)
})

test("Function [birthday] is working correctly",  () => {
    const expectedResult = [
        {name: "Peter", age: 18, gender: "M", seniority: "J"},{name: "Ludka", age: 21, gender: "F", seniority: "J"}, {name: "Kamil", age: 33, gender: "M", seniority: "M"}, {name: 'Marian', age: 34, gender: "M", seniority: "M"}
    ]
    expect(birthday(people)).toEqual(expectedResult)
})
test("Function [names] is working correctly", () => {
    const expectedResult = ["Marian"]
    expect(names(people)).toEqual(expectedResult)
})
