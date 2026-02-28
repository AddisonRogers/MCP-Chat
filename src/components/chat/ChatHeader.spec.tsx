import { expect, test } from '@playwright/experimental-ct-react';
import ChatHeader from './ChatHeader';

test('should render the chat title', async ({ mount }) => {
  const component = await mount(<ChatHeader title='Test Chat' />);
  await expect(component).toContainText('Test Chat');
});
