import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MasterForm extends Component {
	  constructor(props) {
		      super(props)
		      this.state = {
			            currentStep: 1,
			            isdiagnosed: null,
				    isdiabetic: null,
				    ishyper: null,
				    showAgeTextBox: false,
				    showDiabeticRadioBox: false, 
				    showHyperRadioBox: false,
				    showResultsTextBox: false,
				    showConsultTextBox: false,
				    showFinalResultsTextBox: false,
			          }
		  	this._next = this._next.bind(this);
		  	this._prev = this._prev.bind(this);
		  	this.handleChange = this.handleChange.bind(this);
		    }

	  handleChange(event) {
		      let currentStep = this.state.currentStep;
			{console.log(currentStep)}
		      if(currentStep === 1){
			{console.log('here')};
		      const isdiagnosed = event.target.value === 'true' ? true: false;
		      this.setState({ isdiagnosed,showAgeTextBox: isdiagnosed });
		      if(!isdiagnosed){
			this.setState({
      				showDiabeticRadioBox: true
    			});
		     }else{
			this.setState({
      				showDiabeticRadioBox: false,
    			});
		     }
		     }
		     if(currentStep === 2){
			{console.log('in 2')};
		      const isdiabetic = event.target.value === 'true' ? true: false;
		      this.setState({ isdiabetic,showResultsTextBox: isdiabetic });
		      if(!isdiabetic){
			this.setState({
      				showHyperRadioBox: true
    			});
		     }else{
			this.setState({
      				showHyperRadioBox: false,
    			});
		     }
		     }
	
		      if(currentStep === 3){
			const ishyper = event.target.value === 'true' ? true: false;
		      	this.setState({ ishyper,showConsultTextBox: ishyper });
			if(!ishyper){
			this.setState({
      				showFinalResultsTextBox: true
    			});
		     }else{
			this.setState({
      				showFinalResultsTextBox: false,
    			});
		     }
		      }
			
  			{console.log('end')};
		    }
	  
	  _next() {
		      let currentStep = this.state.currentStep
		      currentStep = currentStep >= 3? 4: currentStep + 1
		      this.setState({
			            currentStep: currentStep
			          })
		    }
	    
	  _prev() {
		      let currentStep = this.state.currentStep
		      currentStep = currentStep <= 1? 1: currentStep - 1
		      this.setState({
			            currentStep: currentStep
			          })
		    }

	/*
	 * * the functions for our button
	 * */
	previousButton() {
		  let currentStep = this.state.currentStep;
		  if(currentStep !==1){
			      return (
				            <button 
				              className="btn btn-secondary" 
				              type="button" onClick={this._prev}>
				            Previous
				            </button>
				          )
			    }
		  return null;
	}

	nextButton(){
		  let currentStep = this.state.currentStep;
		  if(currentStep <4){
			      return (
				            <button 
				              className="btn btn-primary float-right" 
				              type="button" onClick={this._next}>
				            Next
				            </button>        
				          )
			    }
		  return null;
	}
	  
	  render() {    
			const { isdiagnosed } = this.state;
		      return (
			      	<div className='container py-4'>
			          <div className='row justify-content-center'>
			            <div className='col-md-6'>
			            <div className='card'>
			            <div className='card-header'>Check for Test</div>
			            <div className='card-body'>
			            <React.Fragment>
			            <p>Step {this.state.currentStep} </p> 

			            <form onSubmit={this.handleSubmit}>
			              <Step1 
			                currentStep={this.state.currentStep} 
			                handleChange={this.handleChange}
			                isdiagnosed={this.state.isdiagnosed}
			              />
			              <Step2 
			                currentStep={this.state.currentStep} 
			                handleChange={this.handleChange}
			                isdiabetic={this.state.isdiabetic}
					showAgeTextBox={this.state.showAgeTextBox}
					showDiabeticRadioBox={this.state.showDiabeticRadioBox}
					
			              />
			              <Step3 
			                currentStep={this.state.currentStep} 
			                handleChange={this.handleChange}
			                ishyper = {this.state.ishyper}
					showResultsTextBox={this.state.showResultsTextBox}
					showHyperRadioBox={this.state.showHyperRadioBox}
			              />
				      <Step4 
			                currentStep={this.state.currentStep} 
					showFinalResultsTextBox = {this.state.showFinalResultsTextBox}
					showConsultTextBox = {this.state.showConsultTextBox}
			              />
			              {this.previousButton()}
			              {this.nextButton()}

			            </form>
			            </React.Fragment>
			      	   </div>
			      	   </div>
			      	</div>
			      	</div>
			      	</div>
			          );
		    }
}

function Step1(props) {
	  if (props.currentStep !== 1) {
		      return null
		    } 
	  return(
			<React.Fragment>
			<div>
			<div className='form-group'>
			    <label>Have you been diagnosed positive for ABC test ?</label>
			</div>
			<div className="radio">
			 <label>
			 <input 
			                    type="radio" 
			                    name="isdiagnosed" 
			                    value="true"
					    checked={props.isdiagnosed === true}
			                    onChange={props.handleChange} /> Yes
			                </label>
			             </div>
			             <div className="radio">
			               <label>
			                 <input 
			                   type="radio" 
			                   name="isdiagnosed" 
			                   value="false"
			                   checked={props.isdiagnosed === false}
			                   onChange={props.handleChange} /> No
			               </label>
			             </div>
			</div>
			</React.Fragment>
		    );
}

function Step2(props) {
	  if (props.currentStep !== 2) {
		      return null
		    } 
	  return(
			<React.Fragment>
				{props.showAgeTextBox && <div> 
				<div className='form-group'>
				  <label> How old are you?</label>
				</div>
					<div className="radio">
						<input
						type="number"
						name="age" /> Years
					</div>
				<div className='form-group'>
				  <label></label>
				</div>
				<div>
				</div>
				</div>}

		      		{props.showDiabeticRadioBox && <div>
				<div className='form-group'>
			              <label>Are you diabetic ?</label>
			        </div>
			        <div className="radio">
			             <label>
			                <input
			                   type="radio"
			                   name="isdiabetic"
			                   value="true"
					   checked={props.isdiabetic === true}
			                   onChange={props.handleChange}
			                    /> Yes
			             </label>
			         </div>
			         <div className="radio">
			          <label>
			              <input
			                type="radio"
			                name="isdiabetic"
			                value="false"
					checked={props.isdiabetic === false}
			                onChange={props.handleChange}
			                 /> No
			           </label>
			         </div>
				</div>}
			</React.Fragment>
		    );
}

function Step3(props) {
	  if (props.currentStep !== 3) {
		      return null
		    } 
	  return(
		      <React.Fragment>
		      {props.showResultsTextBox && 
				<div className='form-group'>
				  <label> Your results!</label>
				</div>}
		      {props.showHyperRadioBox && <div>
				<div className='form-group'>
			              <label>Do you take HyperTension Medicine ?</label>
			        </div>
			        <div className="radio">
			             <label>
			                <input
			                   type="radio"
			                   name="ishyper"
			                   value="true"
					   checked={props.ishyper === true}
			                   onChange={props.handleChange}
			                    /> Yes
			             </label>
			         </div>
			         <div className="radio">
			          <label>
			              <input
			                type="radio"
			                name="ishyper"
			                value="false"
					checked={props.ishyper === false}
			                onChange={props.handleChange}
			                 /> No
			           </label>
			         </div>
				</div>}
		      </React.Fragment>
		    );
}

function Step4(props) {
	if(props.currentStep != 4) {
		return null;
	}
	return(
		      <React.Fragment>
			{props.showConsultTextBox &&
				<div className='form-group'>
			              <label>Please consult your doctor.</label>
			        </div>}
			{props.showFinalResultsTextBox &&
			         <div className='form-goup'>
					<label>Your Results!</label>
				</div>}
		      </React.Fragment>
		    );
}

export default MasterForm
