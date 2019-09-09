import { List } from 'antd';

function EventsListItem({ data }) {
  return (
    <List.Item>
      {data.name}
    </List.Item>
  );
}

export default EventsListItem;
