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

const ContentWrapper = styled.div`
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
	componentDidMount() {
		document.getElementById("sfNum").focus();
	}
  render() {

    return (
      <WindowWrapper>
        <h4>Analytix Change Control</h4>
				<ContentWrapper marginTop="25">
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
				</ContentWrapper>
				<ContentWrapper marginTop="0">
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
				</ContentWrapper>
				<ContentWrapper>
					<Output
						sfNumber={this.state.sfNumber}
						company={this.state.company}
						usersToAdd={this.state.usersToAdd}
						usersToRemove={this.state.usersToRemove}/>
				</ContentWrapper>
      </WindowWrapper>
    )
  }
}

export default Main;
