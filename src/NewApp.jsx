
function NewApp(){
    const num = 100;
    const a = false;
    return <div>
        {/* 核心:表達式(expression) */}
        <div className="card">
            卡片
        </div>
        <hr />
        {/* 所有標籤都需要結尾 */}
        <label htmlFor="xxx">這是label</label>
        <input type="text" id="xxx" />
        <hr />
        <div style={{ color:"red",backgroundColor: "yellow",height:"80px" }}>這是一段文字</div>
        <hr />
        <input type="text" disabled={a}/>
    </div>
}

export default NewApp;

//JSX本質就是JS