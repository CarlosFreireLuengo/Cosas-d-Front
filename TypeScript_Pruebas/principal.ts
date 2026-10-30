type Usertype = {
    name: string;
    organization: string;
    email: string;
}

const userType: Usertype = {
    name: "John Doe",
    organization: "Tajamar",
    email: 'juan@tajamar365.com'
}


interface Usuario{
    name: string;
}


interface Usuario {
    organization: string;
}

interface Usuario {
    email: string;
}



console.log(userType.name);