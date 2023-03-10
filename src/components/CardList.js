import React from "react";
import Card from "./Card";

const cardList = ({robots}) =>{
    
    return (
        <div>
            {
                robots.map((user, i) =>{
                return (<Card key={i}
                        id= {robots[i].id}
                        name = {robots[i].name}
                        username={robots[i].username}
                        email={robots[i].email}>
                     </Card>)
            })
        }
        </div>
    );
}

export default cardList;