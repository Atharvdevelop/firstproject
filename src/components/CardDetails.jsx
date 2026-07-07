import React from 'react'
import { useParams } from 'react-router-dom'

const fooddata = [
    { id: 1, name: 'Pizza', price: 1299, description: 'Delicious cheesy pizza with fresh toppings.' },
    { id: 2, name: 'Burger', price: 799, description: 'Juicy beef burger with lettuce and tomato.' },
    { id: 3, name: 'Pasta', price: 999, description: 'Creamy pasta with herbs and olive oil.' },
    { id: 4, name: 'Momos', price: 499, description: 'Steamed dumplings with spicy chutney.' },
]

function CardDetails() {
    const { id } = useParams()
    const food = fooddata.find(f => f.id === parseInt(id))

    if (!food) {
        return <div className="text-center text-2xl mt-10">Food item not found!</div>
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
                <h1 className="text-3xl font-bold text-blue-900 mb-2">{food.name}</h1>
                <p className="text-gray-600 mb-4">{food.description}</p>
                <p className="text-xl font-semibold text-green-600">
                    ₹{(food.price / 100).toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default CardDetails
