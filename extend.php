<?php

use Flarum\Extend;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),
    function (\Flarum\Foundation\Application $container, Dispatcher $events, SettingsRepositoryInterface $settings) {
        $container['config']['database.redis'] = [
            'client' => $settings->get('zhishiq.redis.client', 'phpredis'),
            'default' => [
                'host' => $settings->get('zhishiq.redis.host', '127.0.0.1'),
                'port' => intval($settings->get('zhishiq.redis.port', 6379)),
                'password' => $settings->get('zhishiq.redis.password', null),
                'database' => intval($settings->get('zhishiq.redis.database', 0)),
            ],
        ];

        $container->register(\Illuminate\Redis\RedisServiceProvider::class);
    },
    new Extend\Locales(__DIR__ . '/locale'),
];
