const awesomeEffect = dict => {
  let container = dict.el;
  let randomChars = "";
  let text = dict.text;
  let possible = dict.possible
    ? dict.possible
    : 'ABCDEFASIRUWJFCKSJHYWRKJEsdfskdjfk-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!)}';
  let delay = dict.delay ? dict.delay : 75;

  const generateRandomTitle = (i, randomChars) => {
    setTimeout(_ => {
      container.innerText = randomChars;
    }, i * delay);
  };

  for (let i = 0; i < text.length + 1; i++) {
    randomChars = text.substr(0, i);
    for (let j = i; j < text.length; j++) {
      randomChars += possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
    }
    generateRandomTitle(i, randomChars);
    randomChars = "";
  }
};


window.addEventListener('load', init);


function init() {
    document.querySelector('.preloader > div').style.borderTopColor = config.preloaderColor;
    setTimeout(() => {
      document.querySelector('.preloader').classList.add('loaded');
    }, config.preloaderDelay * 1000);
    let app = new Vue({
      el: '#asif-page',
    
      data: {
        title: config.title,
        titleVisible: false,
        copyrightText: '',
        copyrightArray: Array.isArray(config.copyrightText) ? config.copyrightText : [config.copyrightText],
        lastCopyrightText: '',
        social: config.social,
        isPlaying: false,
        titleEffectInterval: null,
        copyrightEffectInterval: null,
        titleColor: config.titleColor,
        titleShadowColor: config.titleShadowColor,
        copyrightTextColor: config.copyrightTextColor,
        socialColor: config.socialColor,
        socialShadowColor: config.socialShadowColor,
        playButtonColor: config.playButtonColor,
        playButtonShadowColor: config.playButtonShadowColor,
        preloaderColor: config.preloaderColor,
    
        SOCIAL: {
          telegram(data) {
            let username = data.trim();
            return `https://t.me/` + username;
          },
    
          vk(data) {
            let username = data.trim();
            return `https://vk.com/` + username;
          },

          steam(data) {
            let username = data.trim();
            return `https://steamcommunity.com/id/` + username;
          },

          soundcloud(data) {
            let username = data.trim();
            return `https://soundcloud.com/` + username;
          },

          instagram(data) {
            let username = data.trim();
            return `https://www.instagram.com/` + username;
          },

          twitch(data) {
            let username = data.trim();
            return `https://www.twitch.tv/` + username;
          },
        }
      },

      methods: {
        stopPlay() {
          this.isPlaying = false;
          this.titleVisible = false;
        },
    
        startPlay() {
          let video = this.$refs['background-video'];
          let title = this.$refs['title'];
        
          this.$refs['background-video'].play();
          this.$refs['background-video'].muted = false;
          this.isPlaying = true;
        
          setTimeout(() => {
            this.titleVisible = true;
            awesomeEffect({
              el: title,
              text: this.title,
            });

            if (this.titleEffectInterval) clearInterval(this.titleEffectInterval);
            this.titleEffectInterval = setInterval(() => {
              awesomeEffect({
                el: title,
                text: this.title,
              });
            }, 2000);
      
            if (this.copyrightEffectInterval) clearInterval(this.copyrightEffectInterval);
            let changeCopyright = () => {
              let newText = getRandomCopyrightText();

              while (newText === this.lastCopyrightText) {
                newText = getRandomCopyrightText();
              }

              this.lastCopyrightText = newText;
              this.copyrightText = newText;

              const el = document.querySelector('.asif-page-copyright');
              if (el) {
                awesomeEffect({
                  el: el,
                  text: this.copyrightText
                });
              }
            };

            let getRandomCopyrightText = () => {
              return this.copyrightArray[Math.floor(Math.random() * this.copyrightArray.length)];
            }

            this.copyrightEffectInterval = setInterval(() => {
              changeCopyright();
            }, 5000);
          }, config.showDelay * 1000);

          if (typeof hideDim === 'function') hideDim();

          if (window.startOneko) window.startOneko();
        },
    
        getSocialLink(type, username) {
          return this.SOCIAL[type](username);
        }
      },
    
      mounted() {
        let video = this.$refs['background-video'];
    
        video.addEventListener('ended', e => {
          this.stopPlay();
        })

        let newText = this.copyrightArray[Math.floor(Math.random() * this.copyrightArray.length)];
        this.copyrightText = newText;
        awesomeEffect({
          el: document.querySelector('.asif-page-copyright'),
          text: newText,
        });
      },

      computed: {
        TitleStyle() {
          return {
            color: this.titleColor,
            textShadow: `3px 3px 0 ${this.titleShadowColor}`,
          }
        },

        CopyRightStyle() {
          return {
            color: this.copyrightTextColor,
          }
        },

        SocialStyle() {
          return {
            color: this.socialColor,
            textShadow: `3px 3px 0 ${this.socialShadowColor}`,
          }
        },

        PlayButtonStyle() {
          return {
            color: this.playButtonColor,
            textShadow: `3px 3px 0 ${this.playButtonShadowColor}`,
          }
        },
      }
    })
}