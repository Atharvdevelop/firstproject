import React from 'react'
const cardstyle = "bg-red-400 text-pink-200 p-2 gap-20 justify-content space-between h-25 w-50"
function Card() {
  return (
    <div>
        <div className="bg-blue-900 text-white p-2 grid grid-cols-3 justify-content align-items gap-20">

            {/*First card*/}
            <div className={cardstyle}>Card 1<p>Hello, World!</p></div>

            {/*Second card*/}
            <div className={cardstyle}>Card 2<p>This is a beautiful day!</p></div>

            {/*Third card*/}
            <div className={cardstyle}>Card 3<p>I want to play chess</p></div>

            {/*Fourth card*/}
            <div className={cardstyle}>Card 4<p>I win a match today</p></div>

            {/*Fifth card*/}
            <div className={cardstyle}>Card 5<p>I will play a tournament tomorrow</p></div>

            {/*Sixth card*/}
            <div className={cardstyle}>Card 6<p>I will eat momos</p></div>

        </div>
    </div>
  )

}

export default Card