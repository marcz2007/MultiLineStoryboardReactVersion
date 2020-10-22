import React from "react";



const TopField = (props) => {
    if (props.topField === '') {

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInputChange} name="topField"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    } else return (
        <a href={'/'}>{props.topField} </a>
    )

}


export default TopField;