import { extend } from 'flarum/extend';
import app from 'flarum/app';

import RedisSettingsModal from './components/RedisSettingsModal';

app.initializers.add('zhishiq-redis', app => {
  app.extensionSettings['zhishiq-redis'] = () => app.modal.show(new RedisSettingsModal());
});
