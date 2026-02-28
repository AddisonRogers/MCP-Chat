import { test, expect } from '@playwright/experimental-ct-react';
import ChatInput from './ChatInput';

test('should send message when enter key is pressed', async ({ mount }) => {
  let message = '';
  const component = await mount(<ChatInput onSend={(val) => message = val} />);
  
  const input = component.getByPlaceholder(/Type your message/);
  await input.fill('Hello Playwright');
  await input.press('Enter');
  
  expect(message).toBe('Hello Playwright');
});

test('should send message when send button is clicked', async ({ mount }) => {
  let message = '';
  const component = await mount(<ChatInput onSend={(val) => message = val} />);
  
  const input = component.getByPlaceholder(/Type your message/);
  await input.fill('Button Click Test');
  await component.locator('button').click();
  
  expect(message).toBe('Button Click Test');
});
