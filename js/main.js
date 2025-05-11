// 側選單
const App = {
  data() {
    return {
      workExp: [
        {
          title: "前端設計",
          time: "2024.06 - 仍在職",
          skills: [
            "HTML",
            "CSS",
            "javascript",
            "jQuery",
            "Vue",
            "d3.js",
            "Git",
          ],
          list: [
            // "獨立設計 AI 聊天室 UI ，使用 Vue.js + CSS 實作 RWD 響應式介面。",
            // "根據使用者需求，將門診的身高、體重量測資料，設計成互動式折線圖介面 UI ，幫助家長直觀追蹤孩子成長趨勢。",
            // "將公司紙本表單轉為網頁格式，優化填寫流程。例：人員到離職作業清單、異常懲處單，等跨部門簽核文件。",
            "使用 javascript、 CSS 獨立設計 AI 聊天室 UI，支援 RWD 響應式畫面。",
            "設計兒童成長折線圖介面，協助家長直觀追蹤數據。",
            "將紙本表單（如離職清單、懲處單）數位化，優化部門工作流程、便於追蹤。",
          ],
        },
        {
          title: "網頁設計",
          time: "2022.04 – 2024.05",
          skills: ["HTML", "SCSS", "jQuery", "javascript", "Vue", "Git"],
          list: [
            "使用 HTML、CSS、javascript、jQuery 開發公司官網與活動頁，實作 RWD 響應式設計、前端互動功能。",
            "使用 Photoshop 製作主視覺、Layout，並轉為符合 RWD 的前端畫面。",
            "視覺設計：捷運公車廣告、Banner、網頁 UI 畫面。",
          ],
        },
      ],
      projects: [
        {
          name: "遊戲事前預約頁",
          skills: ["SCSS", "javascript", "jQuery", "Vue.js"],
          url: "project/bp_prereg/prereg.html",
          description: [
            "Photoshop製作視覺layout",
            "使用HTML和CSS進行響應式網頁設計(RWD)",
            "使用JavaScript、jQuery、Vue.js開發前端功能",
            "swiper套件使用",
          ],
          img: [
            "img/web/web_bp_1.jpg",
            "img/web/web_bp_2.jpg",
            "img/web/web_bp_3.jpg",
            "img/web/web_bp_4.jpg",
            "img/web/web_bp_5.jpg",
            "img/web/web_bp_6.jpg",
          ],
        },
        {
          name: "遊戲 2 週年活動頁",
          skills: ["HTML", "CSS", "javascript", "jQuery"],
          url: "project/Fly_20230614_event2anniversary(noTidy)/index.html",
          description: [
            "Photoshop製作視覺layout",
            "使用HTML和CSS進行網頁設計切版",
            "使用JavaScript、jQuery開發前端功能",
          ],
          img: [
            "img/web/web_ff2th_1.jpg",
            "img/web/web_ff2th_2.jpg",
            "img/web/web_ff2th_3.jpg",
          ],
        },
        {
          name: "遊戲 1 週年活動頁",
          skills: ["HTML", "CSS", "javascript", "jQuery"],
          url: "",
          description: [
            "Photoshop製作視覺layout",
            "使用HTML和CSS進行網頁設計切版",
            "使用JavaScript、jQuery開發前端功能",
          ],
          img: [
            "img/web/web_ff1th_1.jpg",
            "img/web/web_ff1th_2.jpg",
            "img/web/web_ff1th_3.jpg",
          ],
        },
        {
          name: "遊戲 3 週年活動頁",
          skills: ["HTML", "CSS", "javascript", "jQuery"],
          url: "",
          description: [
            "Photoshop製作視覺layout",
            "使用HTML和CSS進行響應式網頁設計切版",
            "使用JavaScript、jQuery開發前端功能",
          ],
          img: [
            "img/web/web_so_1.jpg",
            "img/web/web_so_2.jpg",
            "img/web/web_so_3.jpg",
            "img/web/web_so_4.jpg",
          ],
        },
      ],
    };
  },
  mounted() {
    this.initSwipers();
  },

  methods: {
    scrollToTop(page) {
      const el = document.querySelector(page);
      el?.scrollIntoView({ behavior: "smooth" });
    },

    initSwipers() {
      new Swiper(".swiperBox2", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      new Swiper(".swiperBox3", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 0.7,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        loop: true,
      });
    },
  },
};
Vue.createApp(App).mount("#app");
