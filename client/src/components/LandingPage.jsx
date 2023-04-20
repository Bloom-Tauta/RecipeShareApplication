
import Card from "./Card";
import { useState, useEffect } from "react";




function LandingPage({search}){

    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [recipes, setRecipes] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [searchBy, setSearchBy] = useState("area")

    useEffect(() =>{
        fetch("http://localhost:3000/meals",{
        })
        .then((response) =>response.json())
        .then((data) =>{
            organizePages([...data,...data], itemsPerPage, setRecipes);
        })
    }, [])

    function organizePages(data, perPage, setPages) {
        let temp = []
        for(let i=0;i<data.length;i+=perPage){
            temp.push(data.slice(i,i+perPage))
        }
        setPages(temp)
    }

    //filter by name

    // const filteredMeals = meals.filter((meal, index) => {
    //     return meal.name.toLowerCase().includes(search.toLowerCase())
    // })

    function handleChange(e){
        setSearchBy(e.target.value)
    }

    // const filteredRecipes = recipes.filter()

    return(
        <div className="">
            <div className="flex justify-center w-full gap-3">
                <div className="flex gap-2">
                    <input type="radio" value="area" onChange={handleChange} name="search"/>
                    <label>Area</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" value="ratings" onChange={handleChange} name="search"/>
                    <label>Ratings</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" value="ingredients" onChange={handleChange} name="search"/>
                    <label>Ingredients</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" value="servings" onChange={handleChange} name="search"/>
                    <label>Servings</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" value="createdat" onChange={handleChange} name="search"/>
                    <label>Created on</label>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 place-content-stretch md:w-3/4 mx-auto">
                {/* to be replaced by : filteredMeals */}
                { recipes.length > 0 && recipes[currentPage].map((meal, index) =>{
                    return (
                        <Card key={index} meal={meal} />
                    )
                })}
            </div>
            <Pagination totalPages={recipes.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

function Pagination({totalPages, currentPage,  setCurrentPage}) {

    return (
        <div className="flex justify-center gap-3 my-4">
            {
                new Array(totalPages).fill(0).map((page, index) => {
                    return <button className={`h-6 w-6 ${index === currentPage ? "bg-blue-800 text-white" : "ring-1"} rounded-full font-bold`} onClick={() => setCurrentPage(index)}>{index+1}</button>
                })
            }
        </div>
    )
}

export default LandingPage;