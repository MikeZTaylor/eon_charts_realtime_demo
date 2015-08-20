var pubnub = PUBNUB.init({
  publish_key: 'demo',
  subscribe_key: 'demo'
});
setInterval(function(){

  pubnub.publish({
    channel: 'c3-spline',
    message: {
      columns: [
        ['x', new Date().getTime()],
        ['Austin', Math.floor(Math.random() * 99)],
        ['New York', Math.floor(Math.random() * 99)],
        ['San Francisco', Math.floor(Math.random() * 99)],
        ['Portland', Math.floor(Math.random() * 99)]

      ]
    }
  });

}, 1000);