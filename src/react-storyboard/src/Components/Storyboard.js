import React, {Component} from 'react';
import Sentence from './Sentence'
import TopField from "./TopField";
// import TextField from "./TextField";
import {Link, Router} from 'react-router-dom'
import {useParams} from "react-router";

const Item = ({handleSubmit, value, select}) => {

    if (value) {
        return (
            <button onClick={select}>
                {value}
            </button>
        )
    } else {
        return (

            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <button type={"submit"}>
                    Submit
                </button>
            </form>

        )
    }


}


class Storyboard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            currentNode: {
                parentNode: undefined,
                currentValue: '',
                topField: {},
                leftField: {},
                centreField: {},
                rightField: {},
                bottomField: {}
            },
        }


        this.handleSubmit = this.handleSubmit.bind(this)


    }

    select = (position) => {
        this.setState({currentNode: this.state.currentNode[position]})

    }

    handleSubmit = (event, position) => {

        event.preventDefault();
        console.log('pos: ', position)

        const fieldEntry = event.target[0].value;
        console.log('fe: ', fieldEntry)
        const currentNode = this.state.currentNode;
        currentNode[position] = {
            parentNode: currentNode,
            currentValue: fieldEntry,
            topField: {},
            leftField: {},
            centreField: {},
            rightField: {},
            bottomField: {}

        }
        this.setState({currentNode});


    }


    resetPointer = (event) => {

        let currentNode = this.state.currentNode;

        while (currentNode.parentNode){
            currentNode = currentNode.parentNode;

        }

        console.log(currentNode)
        //const dag = this.state;
        this.setState({currentNode: currentNode},
            () => {this.select('centreField')});

    }


    render() {
        return (
            <body>
            <table>
                <tbody>
                <tr>
                    <th></th>
                    <th>
                        <Item handleSubmit={(event) => {
                            this.handleSubmit(event, 'topField')
                        }} value={this.state.currentNode.topField.currentValue} select={() => {
                            this.select('topField')
                        }}/>

                    </th>
                    <th></th>
                </tr>
                <tr>
                    <th>
                        <Item handleSubmit={(event) => {
                            this.handleSubmit(event, 'leftField')
                        }} value={this.state.currentNode.leftField.currentValue} select={() => {
                            this.select('leftField')
                        }}/>
                    </th>
                    <th>

                        {(this.state.currentNode && this.state.currentNode.currentValue) ?
                            <h1>  {this.state.currentNode.currentValue}  </h1> : <Item handleSubmit={(event) => {
                                this.handleSubmit(event, 'centreField')
                                this.select('centreField')
                            }} value={this.state.currentNode.centreField.currentValue} select={() => {
                                this.select('centreField')
                            }}/>}

                    </th>
                    <th>
                        <Item handleSubmit={(event) => {
                            this.handleSubmit(event, 'rightField')
                        }} value={this.state.currentNode.rightField.currentValue} select={() => {
                            this.select('rightField')
                        }}/>
                    </th>
                </tr>
                <tr>
                    <th>

                    </th>
                    <th>
                        <Item handleSubmit={(event) => {
                            this.handleSubmit(event, 'bottomField')
                        }} value={this.state.currentNode.bottomField.currentValue} select={() => {
                            this.select('bottomField')
                        }}/>
                    </th>
                    <th>

                    </th>
                </tr>
                </tbody>
            </table>
            <button onClick={this.resetPointer}>
                Back to the start
            </button>
            </body>
        )
    }


}


export default Storyboard;