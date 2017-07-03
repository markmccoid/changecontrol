import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import 'antd/lib/tabs/style/css';

import * as helpers from '../helpers/createOutput';

const TabContent = styled.textarea`
	width: 600px;
	height: 250px;
	border: 1px solid black;
	padding: 10px 20px;
	white-space: pre-wrap;
`;

// <textarea name="text_area" rows="10" cols="80"
// onClick="javascript:this.form.text_area.focus();this.form.text_area.select();">
//
// Text Goes Here
//
// </textarea>
const Output = (props) => {
	function callback(key) {
  	console.log(key);
	}

	return (
		<Tabs onChange={callback} style={{width: "100%"}}>
			<TabPane tab="Internal" key="1">
				<TabContent
					id="internal"
					value={`${helpers.createInternal(props)}`}
				/>
				<button className="button primary small"
					onClick={()=> {
						document.getElementById('internal').select();
    				document.execCommand('copy');
					}}>Copy</button>
		</TabPane>
		<TabPane tab="Customer" key="2">
			<TabContent
				id="customer"
				value={`${helpers.createCustomer(props)}`}
			/>
			<button className="button primary small"
				onClick={()=> {
					document.getElementById('customer').select();
					document.execCommand('copy');
				}}>Copy</button>
		</TabPane>
		<TabPane tab="Complete" key="3">
			<TabContent
				id="complete"
				value={`${helpers.createComplete(props)}`}
			/>
			<button className="button primary small"
				onClick={()=> {
					document.getElementById('complete').select();
					document.execCommand('copy');
				}}>Copy</button>
		</TabPane>
	</Tabs>
	)
}

Output.propTypes = {
	sfNumber: PropTypes.string,
	company: PropTypes.string,
	usersToAdd: PropTypes.string,
	usersToRemove: PropTypes.string
}
export default Output;
