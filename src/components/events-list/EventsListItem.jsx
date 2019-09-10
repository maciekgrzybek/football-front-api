import { List } from 'antd';
import PropTypes from 'prop-types';

import { MarketPopover } from '../common';


function EventsListItem({ data }) {
  console.log(data)
  return (
    <List.Item>
      <p>
        {data.name}
      </p>
      <MarketPopover />
    </List.Item>
  );
}

EventsListItem.propTypes = {
  data: PropTypes.object,
};

export default EventsListItem;
