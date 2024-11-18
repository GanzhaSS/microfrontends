import { createRoot } from 'react-dom/client';
import App from './App';

const mount = (props: any) => {
  const root = createRoot(props.container);
  root.render(<App />);
};

const unmount = (props: any) => {
  const root = createRoot(props.container);
  root.unmount();
};

export { mount, unmount };
