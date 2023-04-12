export function Button() {
    const test = "some word"

    return <button onClick={()=>console.log("click")}>Custom Button</button>
}

function click(test) {
    console.log("click", test)
}

function hello(test) {
    console.log("hello")
}