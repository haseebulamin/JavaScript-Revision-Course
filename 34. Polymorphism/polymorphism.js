class Bird{
    fly(){
        console.log("Birds are flying.")
    }
}

class Eagle extends Bird{
    fly(){
        console.log("Eagle sour High.")
    }
}

const bird = new Bird();
const eagle = new Eagle();

bird.fly();
eagle.fly();