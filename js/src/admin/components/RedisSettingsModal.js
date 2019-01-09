import SettingsModal from 'flarum/components/SettingsModal';

export default class RedisSettingsModal extends SettingsModal {
  className() {
    return 'RedisSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('zhishiq.redis.admin.setting_title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('zhishiq.redis.admin.client')}</label>
        <input className="FormControl" bidi={this.setting('zhishiq.redis.client')} />
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('zhishiq.redis.admin.host')}</label>
        <input className="FormControl" bidi={this.setting('zhishiq.redis.host')} />
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('zhishiq.redis.admin.port')}</label>
        <input className="FormControl" bidi={this.setting('zhishiq.redis.port')} />
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('zhishiq.redis.admin.password')}</label>
        <input className="FormControl" bidi={this.setting('zhishiq.redis.password')} />
      </div>,

      <div className="Form-group">
        <label>{app.translator.trans('zhishiq.redis.admin.database')}</label>
        <input className="FormControl" bidi={this.setting('zhishiq.redis.database')} />
      </div>,
    ];
  }
}
