import React from 'react'

function NewDrops() {
    const NewDrops = [
        {
            id: 1,
            image: "https://www.snitch.co.in/cdn/shop/files/648d79a94b5eb766c669a4f000fef8ac.webp?v=1717591205&width=200",
            name: "BODIL BLACK STRIPED SHIRT"
        },
        {
            id: 2,
            image: "https://www.snitch.co.in/cdn/shop/files/ca3cfac9adcbd567acd6e4293a94d00e.webp?v=1717596217&width=200",
            name: "BODIL NAVY STRIPED SHIRT"
        },
        {
            id: 3,
            image: "https://www.snitch.co.in/cdn/shop/files/397a84c7c3df9564fa5263086949b28d.webp?v=1717584449&width=200",
            name: "BODIL PEACH STRIPED SHIRT"
        },
        {
            id: 4,
            image: "https://www.snitch.co.in/cdn/shop/files/f4e10fae62de1a0fb3de41de56fc390a.webp?v=1717591545&width=200",
            name: "BODIL GREY STRIPED SHIRT"
        },
    ]
    return (
        <div>
            <div>
                <div className='grid grid-cols-4 gap-4 '>
                    {NewDrops.map((item) => (
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

export default NewDrops
