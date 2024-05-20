import {
  Menu, MenuTrigger, Item, ActionButton,
} from '@adobe/react-spectrum';

const MAIN_NAV_LINKS = [
  {
    path: 'orders/new',
    text: 'New Order',
  },
  {
    path: 'orders',
    text: 'Order History',
  },
];

export default function DropDownMenu() {
  return (
    <MenuTrigger>
      <ActionButton>
        Edit
      </ActionButton>
      <Menu items={MAIN_NAV_LINKS}>
        {(item) => <Item key={item.text} href={item.path}>{item.text}</Item>}
      </Menu>
    </MenuTrigger>
  );
}
