import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { withRouter} from "react-router-dom";
import {withTracker} from 'meteor/react-meteor-data'

class ${NAME} extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            </div>
        )
    }

    static defaultProps = {}

    static propTypes = {}
}

const ${NAME}WithTracker = withRouter(
    withTracker(({}) => {
            const Id = match.params.Id
            const handle = Meteor.subscribe('${NAME}', Id)
            const loading = !handle.ready()
            let ${NAME}
            if (!loading) {
                ${NAME} = ${NAME}.findOne(Id)
            }
            return {
                loading,
                ${NAME}
            }
        }
    )(${NAME})
)

${NAME}WithTracker.displayName='${NAME}'

export default ${NAME}WithTracker
