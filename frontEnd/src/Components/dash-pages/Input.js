import React, { useState, useEffect } from "react";
import './modal.css'
import { Link, Redirect } from "react-router-dom";

export default function Inputs(props){
    
    return (<div>
        {props.input==="Every Minute"?<div><input
                                    className='form-control px-3 my-4'
                                    type='subject'
                                    placeholder='Second'
                                    name='fromemail'
                                    onChange={(e) => {
                                        props.second(e.target.value);
                                    }}
                                    required
                                ></input ></div>:props.input==="Every Week"?<div><input
                className='form-control px-3 my-4'
                type='subject'
                placeholder='Second'
                name='fromemail'
                onChange={(e) => {
                    props.second(e.target.value);
                }}
                required
            ></input ><input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Minute'
            name='fromemail'
            onChange={(e) => {
                props.minute(e.target.value);
            }}
            required
        ></input >
        <input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Hour'
            name='fromemail'
            onChange={(e) => {
                props.hour(e.target.value);
            }}
            required
        ></input >
        <input
                className='form-control px-3 my-4'
                type='subject'
                placeholder='Day'
                name='fromemail'
                onChange={(e) => {
                    props.week(e.target.value);
                }}
                required
            ></input ></div>:props.input==="Every Month"?<div><input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Second'
            name='fromemail'
            onChange={(e) => {
                props.second(e.target.value);
            }}
            required
        ></input ><input
        className='form-control px-3 my-4'
        type='subject'
        placeholder='Minute'
        name='fromemail'
        onChange={(e) => {
            props.minute(e.target.value);
        }}
        required
    ></input >
    <input
        className='form-control px-3 my-4'
        type='subject'
        placeholder='Hour'
        name='fromemail'
        onChange={(e) => {
            props.hour(e.target.value);
        }}
        required
    ></input >
    <input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Day'
            name='fromemail'
            onChange={(e) => {
                props.day(e.target.value);
            }}
            required
        ></input >
        </div>:props.input==="Every Year"?<div><input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Second'
            name='fromemail'
            onChange={(e) => {
                props.second(e.target.value);
            }}
            required
        ></input ><input
        className='form-control px-3 my-4'
        type='subject'
        placeholder='Minute'
        name='fromemail'
        onChange={(e) => {
            props.minute(e.target.value);
        }}
        required
    ></input >
    <input
        className='form-control px-3 my-4'
        type='subject'
        placeholder='Hour'
        name='fromemail'
        onChange={(e) => {
            props.hour(e.target.value);
        }}
        required
    ></input >
    <input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Day'
            name='fromemail'
            onChange={(e) => {
                props.day(e.target.value);
            }}
            required
        ></input >
        <input
            className='form-control px-3 my-4'
            type='subject'
            placeholder='Month'
            name='fromemail'
            onChange={(e) => {
                props.month(e.target.value);
            }}
            required
        ></input ></div>:""}
    </div>)
}