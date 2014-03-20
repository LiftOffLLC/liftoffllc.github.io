var app = {}; // Sort of namespacing
app.videoSrc = 'http://video-js.zencoder.com/oceans-clip.mp4';
app.startTime = 5;
app.endTime = 25;
if(!_V_){var _V_ = vjs}
app.p1 = _V_('example_video_1', {range : {startTime:5, endTime: 25}}, function(){
  var player = this;
  player.rangePlay({startTime: 5, endTime: 25});
});
