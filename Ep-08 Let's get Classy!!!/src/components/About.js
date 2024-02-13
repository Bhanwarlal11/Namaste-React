import User from "./user";
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is namaste react series</h2>
            <User name={"Namaste React(Function)"}/>
            <UserClass name={"Namaste React(Class)"} location={"Ahmedabad(class)"}/>
        </div>
    );
};

export default About;