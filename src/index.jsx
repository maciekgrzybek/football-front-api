import { render } from 'react-dom';
import App from './components/app/App';

const root = document.getElementById('root');
const load = () => render(<App />, root);

load();
