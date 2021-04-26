import axios from "axios";
import { ArticleStyle } from "./ArticleStyle";
import React, { Component } from "react";
const API = "https://thefoundater.azurewebsites.net/article/";
class ArticleHome extends Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(API)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }
    render() {
        return (
            <ArticleStyle>
            <ul>
                { this.state.persons.map(person => <li className="title">{person.title}</li>)}
                { this.state.persons.map(person => <li className="slug">{person.slug}</li>)}
                { this.state.persons.map(person => <li className="update">{person.updated_on}</li>)}
                { this.state.persons.map(person => <li>{person.content}</li>)}
            </ul>
            </ArticleStyle>
        )
    }
}


export default ArticleHome;
