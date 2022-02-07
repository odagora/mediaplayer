import MediaPlayer from "../mediaPlayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer
    constructor () {
        this.threshold = 0.25
    }
    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });

        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        observer.observe(this.player.media);
    }

    private handleIntersection = (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
        console.log(entry);
    }

    private handleVisibilityChange = () => {
        const isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }
}

export default AutoPause;