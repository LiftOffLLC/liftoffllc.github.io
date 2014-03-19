var app = {}; // Sort of namespacing
app.videoSrc = 'http://video-js.zencoder.com/oceans-clip.mp4';
app.startTime = 5;
app.endTime = 25;
app.p1 = _V_('example_video_1');
app.p1.src(app.videoSrc + '#t=' + app.startTime + ',' + app.endTime);
app.restrictRange = function(e){
    if(app.p1.currentTime() > app.endTime || app.p1.currentTime() < app.startTime) {
        app.p1.currentTime(app.startTime);
        console.log(e);
    }
}

app.p1.on('seeked', app.restrictRange)
app.p1.on('playing', function(){
  app.p1.on('timeupdate', app.restrictRange);
});