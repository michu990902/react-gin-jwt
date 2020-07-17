import React from 'react';
import { connect } from 'react-redux';

const AuthTest = ({val}) => (
    <div>
        <h1>Test</h1>
        <p>val: {val}</p>
    </div>
)

const mapStateToProps = state => ({
    val: state.app.test
});

export default connect(mapStateToProps)(AuthTest);