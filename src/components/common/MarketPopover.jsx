import { Popover, Button } from 'antd';

function MarketPopover() {
  return (
    <Popover content={'<div>siem</div>'} title="Title">
      <Button type="primary">See primary market</Button>
    </Popover>
  );
}

export { MarketPopover };
