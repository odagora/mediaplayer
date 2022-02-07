import JSONAds from './Ads.json'
const ALL_ADS: Ad[] = JSONAds;

export interface Ad {
    imageUrl: string;
    title: string;
    body: string;
    url: string
}

class Ads {
    private static instance: Ads;
    private ads: Ad[];

    private constructor(){
        this.initAds();
    }

    static getInstance(){
        if (!Ads.instance) {
            Ads.instance = new Ads();
        }

        return Ads.instance;
    }

    private initAds(){
        this.ads = [...ALL_ADS];
    }

    getAd(){
        return this.ads.pop();
    }

}

export default Ads;