import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';

import 'dayjs/locale/zh-cn';

import { App as AntdApp, ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

dayjs.locale('zh-cn');

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('找不到 root 节点');
}

ReactDOM.createRoot(rootElement).render(
  <ConfigProvider locale={zhCN}>
    <AntdApp>
      <Provider store={store}>
        <App />
      </Provider>
    </AntdApp>
  </ConfigProvider>
);
