function ArrayMethods(){
    const data = [
        {
            id:1,
            name: "小明",
            cash: 1000,
            favorite: "鍋燒意麵"
        },
        {
            id:2,
            name: "小華",
            cash: 100,
            favorite: "牛肉麵"
        },
        {
            id:3,
            name: "小美",
            cash: 1200,
            favorite: "雞肉飯"
        },
        {
            id:4,
            name: "小李",
            cash: 1800,
            favorite: "滷肉飯"
        },
        {
            id:5,
            name: "小強",
            cash: 2000,
            favorite: "海鮮粥"
        },
    ]
    return <div>
        {/* Map 可以建立新陣列 */}
        {
            data.map((item) => {
                return(
                    <div key={item.id}>
                        <ul>
                            <li>{item.name}</li>
                            <li>{item.cash} 元</li>
                            <li>{item.favorite}</li>
                        </ul>
                    </div>  
                )
            }) 
        }
    </div>
}

export default ArrayMethods;  