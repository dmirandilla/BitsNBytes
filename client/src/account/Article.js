import React, { Component, ImgHTMLAttributes } from "react";
import { render } from "react-dom";


class Article extends React.Component {
    state = {
        sourceName: this.props.sourceName,
        title: this.props.title,
        description: this.props.description,
        image: this.props.image,
        date: this.props.date
    };

    render() {
        return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img class="w-full" src={this.state.image}/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{this.state.title}</div>
                        <p class="text-gray-700 text-base">
                            {this.state.description}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{this.state.date}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{this.state.sourceName}</span>
                    </div>
            </div>
        );
    }
}
export default Article;


