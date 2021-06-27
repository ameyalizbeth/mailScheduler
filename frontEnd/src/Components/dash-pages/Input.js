import React, { useState, useEffect } from "react";
import './modal.css'
import { Link, Redirect } from "react-router-dom";

export default function Inputs(props){
    
    return (<div>
        {props.input==="Every Minute"?<div>
        <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter seconds(0-59)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.second(e.target.value);
                                    }} required/>
    </div>
  </div></div>:props.input==="Every Week"?<div><div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter seconds(0-59)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.second(e.target.value);
                                    }} required/>
    </div></div><div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter minute(0-59)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.minute(e.target.value);
                                    }} required/>
    </div></div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter hour(0-23)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.hour(e.target.value);
                                    }} required/>
    </div></div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter week day(0-7)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.week(e.target.value);
                                    }} required/>
    </div></div></div>:props.input==="Every Month"?<div><div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter seconds(0-59)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.second(e.target.value);
                                    }} required/>
    </div></div><div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter minutes(0-59)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.minute(e.target.value);
                                    }} required/>
    </div></div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter hour(0-23)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.hour(e.target.value);
                                    }} required/>
    </div></div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter day(0-31)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.day(e.target.value);
                                    }} required/>
    </div></div>
        </div>:props.input==="Every Year"?<div><div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter seconds(0-59)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.second(e.target.value);
                                    }} required/>
    </div></div><div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter minutes(0-59)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.minute(e.target.value);
                                    }} required/>
    </div></div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter hour(0-23)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.hour(e.target.value);
                                    }} required/>
    </div></div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter day(0-31)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.day(e.target.value);
                                    }} required/>
    </div></div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-6 col-form-label">Enter month(0-12)</label>
    <div class="col-sm-6">
      <input type="text" class="form-control" onChange={(e) => {
                                        props.month(e.target.value);
                                    }} required/>
    </div></div></div>:""}
    </div>)
}