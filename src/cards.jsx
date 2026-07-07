import React from 'react'

function cards() {
    const fooddata=[
        {id:1,name:'Pizza',price:1299},
        {id:2,name:'Pizza',price:1299},
        {id:3,name:'Pizza',price:1299},
        {id:4,name:'Pizza',price:1299}
    ]
  return (
    <div>
        
        <h1>Food Menu</h1>
      {fooddata.map((food) => (
        <div key={food.id}>
          <h3>{food.name}</h3>
          <p>${(food.price / 100).toFixed(2)}</p>
      </div>
      ))}

    </div>
  )
}

export default cards