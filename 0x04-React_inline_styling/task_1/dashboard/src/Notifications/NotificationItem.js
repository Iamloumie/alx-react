import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      this.props.value ?
      <li
      data-notification-type={this.props.type}
      onClick={() => this.props.markAsRead(this.props.id)}
      >
        {this.props.value}
      </li>
      :
      <li
      data-notification-type={this.props.type}
      dangerouslySetInnerHTML={this.props.html}
      onClick={() => {console.log('empty func');}}
      ></li>
    );
  }
}

NotificationItem.PropTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  id: PropTypes.number
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {console.log('empty func');},
    id: 0
};

export default NotificationItem;