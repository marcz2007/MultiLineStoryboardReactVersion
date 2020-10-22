import React from "react";


const TextField = (props) => {
    console.log(props)
    const currentValue = props.currentValue;
    if (props.currentId === null){
        <body>
        <table>
            <tbody>
            <tr>
                <th></th>
                <th>
                    {/*<TopField.js topField={this.state.topField}/>*/}
                    {/*<RenderRow fieldEntry={this.state.topField}/>*/}
                    <form onSubmit={props.this.handleSubmit}>
                        <input type="text" onChange={props.this.handleInputChange} name="topField"/>
                        <input type="submit" value="Submit"/>
                    </form>
                </th>
                <th></th>
            </tr>
            <tr>
                <th>
                    {/*<RenderCentreLeft leftField={this.state.leftField} />*/}
                    <RenderRow fieldEntry={this.state.leftField}/>
                </th>
                <th>
                    {/*<RenderCentre centreField={this.state.centreField} />*/}
                    <RenderRow fieldEntry={this.state.centreField}/>
                </th>
                <th>
                    {/*<RenderCentreRight  rightField={this.state.rightField} />*/}
                    <RenderRow fieldEntry={this.state.rightField}/>
                </th>
            </tr>
            <tr>
                <th>

                </th>
                <th>
                    {/*<RenderBottom bottomField={this.state.bottomField}/>*/}
                    <RenderRow fieldEntry={this.state.bottomField}/>
                </th>
                <th>

                </th>
            </tr>
            </tbody>
        </table>
        </body>


    }
    if (props.topField === '') {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInputChange} name="topField"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
    else {

        return (
                <a href={`/position=${props.topField}`}>{props.topField} </a>
                // <Sentence writtenSentence = {this.state.topField}/>
            )
    }

}


export default TextField;