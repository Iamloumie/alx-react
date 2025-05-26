import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const itemStyles = StyleSheet.create({
  urgent: {
    color: 'red',
  },

  default: {
    color: 'blue',
  },
});

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
    this.selected_style = this.props.type === 'default' ? itemStyles.default : itemStyles.urgent;
  }

  render () {
    return (
      this.props.value ?
      <li
      data-notification-type={this.props.type}
      onClick={() => this.props.markAsRead(this.props.id)}
      className={css(this.selected_style)}
      >
        {this.props.value}
      </li>
      :
      <li
      data-notification-type={this.props.type}
      dangerouslySetInnerHTML={this.props.html}
      onClick={() => {console.log('empty func');}}
      className={css(this.selected_style)}
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