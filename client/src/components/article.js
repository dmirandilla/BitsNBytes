import React, { Component, ImgHTMLAttributes } from "react";
import { render } from "react-dom";
import Index from "~/routes";

 {
    state = {
        title: this.props.icon,
        description: this.props.description,
        lengthOfRental: this.props.lengthOfRental,
        count: this.props.count,
    };


        return (
            <div>
                <div>
                    <div className="">
                        <img
                            className="flex pl-[55px] py-3 object-scale-down tile-img"
                            src={this.state.icon || ""}
                        />
                        <div className="card p-5 drop-shadow-lg bg-SJSU-Gray rounded-md justify-center w-[307px] min-w-fit">
                            {this.state.count > 0 ? (
                                <div className="absolute -right-4 -top-4 w-[40px] h-[40px] rounded-full bg-green-600 py-3 font-bold text-white text-2xl text-center leading-3">
                                    {" "}
                                    {this.state.count}{" "}
                                </div>
                            ) : (
                                <div className="absolute -right-4 -top-4 w-[40px] h-[40px] rounded-full bg-red-600 py-3 font-bold text-white text-2xl text-center leading-3">
                                    {" "}
                                    {this.state.count}{" "}
                                </div>
                            )}
                            <h1 className="flex justify-center font-bold text-3xl">
                                {" "}
                                {this.state.description}{" "}
                            </h1>
                            <h2 className="flex justify-center text-2xl">
                                {" "}
                                {this.state.lengthOfRental}{" "}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default Article;
