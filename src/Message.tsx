//creating a react component

//PascalCasing- Capitalise first letter of every word, react convention for naming functions
function Message(){
    // JSX:JavaScript XML, this code under the hood gets compiled to javascript
    const name= '';

    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

//to use component export as default
export default Message;
