import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import 'antd/lib/tabs/style/css';

import * as helpers from '../helpers/createOutput';

const TabContent = styled.div`
	width: 600px;
	border: 1px solid black;
	padding: 10px 20px;
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
				<TabContent onClick={}>{helpers.createInternal(props)}</TabContent>
		</TabPane>
			<TabPane tab="This is panel tab 2" key="2">
				<p>{props.company}</p>
		</TabPane>
			<TabPane tab="This is panel tab 3" key="3">
				<p>{props.usersToAdd}</p>
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
