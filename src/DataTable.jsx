import { useState } from "react";

const data= [
    {
        "id":1,
        "name": "購買雜貨",
        "dueDate": "2023-07-30",
        "completed": true
    },
    {
        "id":2,
        "name": "完成報告",
        "dueDate": "2023-08-01",
        "completed": false
    },
    {
        "id":3,
        "name": "清理房間",
        "dueDate": "2023-07-28",
        "completed": true
    },
    {
        "id":4,
        "name": "計畫假期",
        "dueDate": "2023-08-05",
        "completed": false
    },
    {
        "id":5,
        "name": "處理稅務",
        "dueDate": "2023-08-10",
        "completed": true
    },
]

function DataTable() {
    const [todo,setTodo] = useState(data)


    return <div>
        DataTable
        <table>
            <thead>
                    <tr>
                        <th>代辦事項名稱</th>
                        <th>到期日</th>
                        <th>是否已完成</th>
                    </tr>
            </thead>
            <tbody>
                {
                    todo.map((item) => {
                        return( <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.dueDate}</td>
                            <td><button onClick={() => {
                                // const newTodo = [...data];  //展開ES6 > 淺拷貝

                                //改特定位置Todo
                                //1.簡單
                                // newTodo.forEach((newItem) =>{
                                //     if(newItem.id === item.id){
                                //         item.completed = !item.completed
                                //     }
                                // })

                                //2.中階
                                //React 工程師
                                // const newTodo = todo.map((newItem) => {
                                //     // if(newItem.id === item.id){
                                //     //     newItem.completed = !newItem.completed
                                //     // }
                                // });

                                //3.惡夢
                                const newTodo = todo.map((newItem) =>
                                    newItem.id === item.id ? {
                                        ...newItem,
                                        completed : !newItem.completed
                                    } : newItem
                                );


                                setTodo(newTodo)
                            }}  >{item.completed ? "是": "否"}</button></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>

        <hr />
        <table>
            <thead>
                <tr>
                    <th>代辦事項名稱</th>
                    <th>到期日</th>
                    <th>是否已完成</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>購買雜貨</td>
                    <td>2023-07-30</td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>完成報告</td>
                    <td>2023-08-01</td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>清理房間</td>
                    <td>2023-07-28</td>
                    <td>是</td>
                </tr>
                <tr>
                    <td>計畫假期</td>
                    <td>2023-08-05</td>
                    <td>否</td>
                </tr>
                <tr>
                    <td>處理稅務</td>
                    <td>2023-08-10</td>
                    <td>是</td>
                </tr>
                
            </tbody>
        </table>
    </div>
}

export default DataTable;