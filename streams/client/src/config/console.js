class MyConsole {
    constructor(open = false){
        this.open = open;
    }

    entering(msg) {
        if(this.open)
            console.log(`%c***------------------------------ Entering ${msg} -------------------------------------***`, "background: red; color: yellow; font-size: medium");
    }

    inspect(msg, value) {
        if(this.open)
            console.log(`%c***Inspecting ${msg} --> ${JSON.stringify(value)}***`, "background: blue; color: yellow; font-size: large");
    }
};

const DragonConsole = new MyConsole();

export default DragonConsole;