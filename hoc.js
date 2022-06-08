const add = (x, y) => x + y

const HOC = (x, addRef) => addRef(x, 25)

HOC(15, add)