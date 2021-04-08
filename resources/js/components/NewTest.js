import axios from 'axios'
import React, {Component} from 'react'

class NewTest extends Component {
	constructor(props) {
		    super(props);
		    this.state = {
			                isdiagnosed: null,
					isdiabetic:null,
			    		hypertension: null,
			    		showResults: null,
					showTextBox: false,
					showRadioBox: false,
					showHyperRadioBox: false,
					showHyperTextBox: false,
					showConsultTextBox: false,
					showResultTextBox: false,
			            };
		    this._handlediagnosis = this._handlediagnosis.bind(this);
		    this._handlehyper = this._handlehyper.bind(this);
		    this._handlediabetic = this._handlediabetic.bind(this);
		  }

	  _handlediagnosis(event) {
		      const isdiagnosed = event.currentTarget.value === 'true' ? true: false;
		      this.setState({ isdiagnosed });
		      this.setState({
      				showTextBox: isdiagnosed,
				isdiabetic: null,
				showHyperRadioBox: false,
				showHyperTextBox: false,
    			});
		      if(!isdiagnosed){
			this.setState({
      				showRadioBox: true
    			});
		     }else{
			this.setState({
      				showRadioBox: false,
    			});
		     }
	  }

	  _handlediabetic(event) {
		      const isdiabetic = event.currentTarget.value === 'true' ? true: false;
		      this.setState({ isdiabetic });
		      this.setState({
      				showHyperTextBox: isdiabetic,
				hypertension: null,
				showConsultTextBox: false,
				showResultTextBox: false,
    		      });
		      if(!isdiabetic){
			this.setState({
      				showHyperRadioBox: true
    			});
		      }else{
			this.setState({
      				showHyperRadioBox: false
    			});
		      }
	  }

	  _handlehyper(event) {
		  const hypertension = event.currentTarget.value === 'true' ? true: false;
		  this.setState({ hypertension });
		  this.setState({
      				showConsultTextBox: hypertension
    		      });
		      if(!hypertension){
			this.setState({
      				showResultTextBox: true
    			});
		      }else{
			this.setState({
      				showResultTextBox: false
    			});
		      }
	  }

	  render() {
		      const { isdiagnosed } = this.state;
		      const { hypertension } = this.state;
		      const { showTextBox } = this.state;
		      const { showRadioBox } = this.state;
		      const { isdiabetic } = this.state;
		      const { showHyperRadioBox } = this.state;
		      const { showHyperTextBox } = this.state;
		      const { showConsultTextBox } = this.state;
		      const { showResultTextBox } = this.state;

		      return (
			      <div className='container py-4'>
			                  <div className='row justify-content-center'>
			                    <div className='col-md-6'>
			                      <div className='card'>
			                        <div className='card-header'>Check for Test</div>
			                        <div className='card-body'>
			            <form onSubmit={this._handleSubmit}>
			      		<div className='form-group'>
			      		<label>Have you been diagnosed positive for ABC test ?</label>
			      		</div>
			              <div className="radio">
			                <label>
			                  <input 
			                    type="radio" 
			                    name="isdiagnosed" 
			                    value="true"
			                    checked={isdiagnosed === true}
			                    onChange={this._handlediagnosis} /> Yes
			                </label>
			             </div>
			             <div className="radio">
			               <label>
			                 <input 
			                   type="radio" 
			                   name="isdiagnosed" 
			                   value="false"
			                   checked={isdiagnosed === false}
			                   onChange={this._handlediagnosis} /> No
			               </label>
			             </div>
				

				{showTextBox &&
				<div> 
				<div className='form-group'>
				  <label> How old are you?</label>
				</div>
					<div className="number">
						<input
						type="number"
						name="age" /> Years
					</div>
				</div>}

			      {showRadioBox && 
				<div>
				<div className='form-group'>
			              <label>Are you diabetic ?</label>
			        </div>
			        <div className="radio">
			             <label>
			                <input
			                   type="radio"
			                   name="isdiabetic"
			                   value="true"
					   checked={isdiabetic === true}
			                   onChange={this._handlediabetic}
			                    /> Yes
			             </label>
			         </div>
			         <div className="radio">
			          <label>
			              <input
			                type="radio"
			                name="isdiabetic"
			                value="false"
					checked={isdiabetic === false}
			                onChange={this._handlediabetic}
			                 /> No
			           </label>
			         </div>
				</div>
			      }

			
			      { showHyperTextBox && 
				<div className='form-group'>
				  <label> Your Result of the Test might be Positive.</label>
				</div> }

			      { showHyperRadioBox && 
				<div>
			      <div className='form-group'>
			          <label>Do you take hypertension medicine ?</label>
			      </div>
			      <div className="radio">
			          <label>
			              <input
			                type="radio"
			                name="hypertension"
			                value="true"
			                checked={hypertension === true}
			                onChange={this._handlehyper} /> Yes
			           </label>
			       </div>

			       <div className="radio">
			          <label>
			              <input
			                type="radio"
			                name="hypertension"
			                value="false"
			                checked={hypertension === false}
			                onChange={this._handlehyper} /> No
			           </label>
			      </div>
			      </div>}

				{ showConsultTextBox && 
				<div className='form-group'>
				  <label> Please Consult your doctor.</label>
				</div> }

				{ showResultTextBox && 
				<div className='form-group'>
				  <label> Your Result of the Test might be Positive.</label>
				</div> }


			      </form>
			    </div>
			 </div>
		      </div>
		</div>
	</div>
    );
	  }
}

export default NewTest
