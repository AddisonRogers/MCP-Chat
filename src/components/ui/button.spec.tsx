import { test, expect } from '@playwright/experimental-ct-react';
import { Button } from './button';

test.use({ viewport: { width: 500, height: 500 } });

test('should render and handle click', async ({ mount }) => {
  let clicked = false;
  const component = await mount(
    <Button onClick={() => clicked = true}>
      Click me
    </Button>
  );

  await expect(component).toContainText('Click me');
  await component.click();
  expect(clicked).toBeTruthy();
});

test('should apply custom className', async ({ mount }) => {
  const component = await mount(
    <Button className="custom-class">
      Styled Button
    </Button>
  );
  
  await expect(component).toHaveClass(/custom-class/);
});
