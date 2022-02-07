import MediaPlayer from "@odagora/mediaplayer";
import AutoPlay from "@odagora/mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@odagora/mediaplayer/lib/plugins/AutoPause"
import Ads from "@odagora/mediaplayer/lib/plugins/Ads";

const video = document.querySelector('video');
const playPause: HTMLElement = document.querySelector('#playPause');
const unmuteMute: HTMLElement = document.querySelector('#unmuteMute');

const player = new MediaPlayer({
    el: video,
    plugins: [ new AutoPlay(), new AutoPause(), new Ads()]
});

playPause.onclick = () => player.togglePlay();
unmuteMute.onclick = () => player.unmuteMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}