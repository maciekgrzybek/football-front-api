import { List } from 'antd';
import PropTypes from 'prop-types';

function EventsListItem({ data }) {
  return (
    <List.Item>
      {data.name}
    </List.Item>
  );
}

EventsListItem.propTypes = {
  data: PropTypes.object,
};

export default EventsListItem;
