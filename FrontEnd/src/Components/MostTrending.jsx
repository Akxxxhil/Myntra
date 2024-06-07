import React from 'react'

function MostTrending() {
    const MostTrending = [
        {
            id: 1,
            image: "https://www.snitch.co.in/cdn/shop/products/SNITCH-JUNE2774.jpg?v=1655661925",
            name: "BODIL BLACK STRIPED SHIRT"
        },
        {
            id: 2,
            image: "https://www.snitch.co.in/cdn/shop/files/4MSS2513-04-M36.jpg?v=1711023832",
            name: "BODIL NAVY STRIPED SHIRT"
        },
        {
            id: 3,
            image: "https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16072.jpg?v=1676639941",
            name: "BODIL PEACH STRIPED SHIRT"
        },
        {
            id: 4,
            image: "https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16121.jpg?v=1676639897",
            name: "BODIL GREY STRIPED SHIRT"
        },
    ]
  return (
    <div>
            <div>
                <div className='grid grid-cols-4 gap-4 '>
                    {MostTrending.map((item) => (
                        <div key={item.id} className="flex flex-col justify-center items-center  p-4">
                            <div className="flex justify-center items-center h-full">
                                <img src={item.image} alt={item.name} className="max-h-40" />
                            </div>
                            <h4 className="text-center">{item.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default MostTrending
