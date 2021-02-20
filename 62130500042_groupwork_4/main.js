const app = {
    data() {
        return {
            travels: [{text: 'จุดที่ดีที่สุด: Murmansk, Siberia, Kola Peninsula', pic: './images/russia.jpg', like: false, notlike: true, show: true},
                      {text: 'จุดที่ดีที่สุด: Kiruna, Abisko, Swedish Lapland', pic: './images/sweden.jpg', like: false, notlike: true, show: true },
                      {text: 'จุดที่ดีที่สุด: Anchorage, Fairbanks, Denali, the Yukon', pic: './images/usa.jpg', like: false, notlike: true, show: true}],    
            search: {click: false, notclick: true},
            box: '',
            image: '',
            showImg: false,
            noPic: false   
        }

    },
    methods: {
        toggleHeart(index) {
            this.travels[index].like = !this.travels[index].like
            this.travels[index].notlike = !this.travels[index].notlike
        },
        Search() {
            this.search.click = !this.search.click
            this.search.notclick = !this.search.notclick
            this.box=''
            this.showPic();
        },
        openPic(index) {
            this.image = this.travels[index].pic
            this.showImg = true
        },
        closePic() {
            this.showImg = false
        },
        searchPic() {
            if(this.box) {
                for (let index = 0; index < this.travels.length; index++) {
                    const element = this.travels[index];
                    if (element.text.toLowerCase() !== this.box.toLowerCase()) {
                        element.show = false
                        this.noPic = false
                    }
                    if (element.text.toLowerCase().includes(this.box.toLowerCase())){
                        element.show = true
                        this.noPic = false
                    }
                    if (this.travels.every(element => !element.show)){
                        this.noPic = true
                    }
                }
            }else{
                this.showPic();
            }
        },
        showPic() {
            for (let index = 0; index < this.travels.length; index++) {
                this.travels[index].show = true
                this.noPic = false
            }
        }
    },
    computed: {
        countUnPic() {
            return this.travels.filter( t => t.like ).length
        }
        
    }

    
}
Vue.createApp(app).mount('#app')