const people = [
    {name: "Ludka", age: 21, gender: "F", seniority: "Junior"}, {name: "Kamil", age: 33, gender: "M", seniority: "Medior"}, {name: 'Marian', age: 33, gender: "M", seniority: "Medior"}
]
//Similar to function groupBySeniority from medium example without using string "Junior" or "Medior". Use value of a property seniority for creating a key
const groupBySeniority = (people) => {

}
test("Function [groupBySeniority] is working correctly", () => {
    const expectedResult = {
        Junior: [ { name: 'Ludka', age: 21, gender: 'F', seniority: 'Junior' } ],
        Medior: [
            { name: 'Kamil', age: 33, gender: 'M', seniority: 'Medior' },
            { name: 'Marian', age: 33, gender: 'M', seniority: 'Medior' }
        ]
    }
    expect(groupBySeniority(people)).toEqual(expectedResult)
})
