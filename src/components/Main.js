import React from 'react';
import styled from 'styled-components';

import Input from './common/Input';
import InputTextArea from './common/InputTextArea';
import Output from './Output';

//--- Styled Components ----//
const WindowWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

const InputWrapper = styled.div`
	display: flex;
	margin-top: ${props => `${props.marginTop}px`};
`
const Button = styled.button`
	width: 150px;
	margin: 0;
`
//--- Main Class ----//
class Main extends React.Component {
	state = {
		sfNumber: "",
		company: "",
		usersToAdd: "",
		usersToRemove: ""
	};

	createChangeControl = () => {
		console.log(this.state);
	}
  render() {

    return (
      <WindowWrapper>
        <h4>Analytix Change Control</h4>
				<Button className="primary button" onClick={this.createChangeControl}>Create</Button>
				<InputWrapper marginTop="25">
	        <Input
						htmlId="sfNum"
						type="text"
						name="sfNum"
						label="Salesforce #"
						onChange={e => this.setState({sfNumber: e.target.value})}
						value={this.state.sfNumber}
					/>
					<Input
						htmlId="company"
						type="text"
						name="company"
						label="Company"
						onChange={e => this.setState({company: e.target.value})}
						value={this.state.company}
					/>
				</InputWrapper>
				<InputWrapper marginTop="0">
					<InputTextArea
						htmlId="add"
						name="add"
						label="User(s) To Add"
						onChange={e => this.setState({usersToAdd: e.target.value})}
						value={this.state.usersToAdd}
					/>
					<InputTextArea
						htmlId="remove"
						name="remove"
						label="User(s) to Remove"
						onChange={e => this.setState({usersToRemove: e.target.value})}
						value={this.state.usersToRemove}
					/>
				</InputWrapper>
				<InputWrapper>
					<Output
						sfNumber={this.state.sfNumber}
						company={this.state.company}
						usersToAdd={this.state.usersToAdd}
						usersToRemove={this.state.usersToRemove}/>
				</InputWrapper>
      </WindowWrapper>
    )
  }
}

export default Main;
