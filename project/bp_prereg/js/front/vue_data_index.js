var api = "/api/announcement";
var api2 = "/api/content";

const app = Vue.createApp({
    delimiters: ["%{", "}"],
    data() {
        return {
            loading: true,
            isClickable: true,

            currentPage: 1,
            totalPages: 8,
            span: ["系統", "系統", "系統", "系統", "系統"],
            title: [
                "標題很長很長的話",
                "標題很長很長的話",
                "標題很長很長的話",
                "標題很長很長的話",
                "標題很長很長的話",
            ],
            time: [
                "2024/01/10",
                "2024/01/10",
                "2024/01/10",
                "2024/01/10",
                "2024/01/10",
            ],
            id: [1, 2, 3, 4, 5],

            sec02Index: {
                currentTab: "new",
                newsTab: {
                    new: "一般",
                    activity: "活動",
                    system: "系統",
                },
            },

            menu: {
                activeTab: 0,
                isAndroid: false,
                isiOS: false,
            },

            popupIndex: {
                id: "",
                visible: false,
                // visible: true,
                title: "標題很長很長的話",
                time: "2024-01-10 18:00:00",
                // text: "這邊全部是內文",
                text: "這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文這邊全部是內文",
            },

            tab1Table: [
                {
                    img: "<img src='img/front/icon/D1.png'>",
                    name: "米迦勒之翼兌換券(紅) (7天）",
                },
                {
                    img: "<img src='img/front/icon/D2.png'>",

                    name: "[獎勵]魔法背包兌換券(1天)",
                },
                {
                    img: "<img src='img/front/icon/D3.png'>",

                    name: "移動速度增加藥水*3",
                },
            ],
        };
    },
    computed: {
        // 動態計算 v-for 的起始和結束範圍
        displayedPages() {
            if (this.totalPages <= 4) {
                // 如果 totalPages 小於等於 4，則顯示前面的全部頁碼
                return Array.from(
                    { length: this.totalPages },
                    (_, index) => index + 1
                );
            }

            // 否則，繼續使用原來的邏輯計算顯示的頁碼範圍
            const startPage = Math.max(1, this.currentPage - 2);
            const endPage = Math.min(startPage + 3, this.totalPages);

            // 如果是最後一頁，則顯示當前頁及前三個頁碼
            if (this.currentPage === this.totalPages) {
                return Array.from(
                    { length: 4 },
                    (_, index) => this.totalPages - 3 + index
                );
            }

            // 否則使用 Array.from 生成起始到結束範圍的數字陣列
            return Array.from(
                { length: endPage - startPage + 1 },
                (_, index) => startPage + index
            );
        },
    },
    methods: {
        async getCurrentTabData(key) {
            this.sec02Index.currentTab = key;

            try {
                const response = await axios.post(api, {
                    pageType: this.sec02Index.currentTab,
                    pageNum: 1,
                });

                if (response.data.status == 1) {
                    this.totalPages = response.data.totalPages;
                    this.span = response.data.span;
                    this.title = response.data.title;
                    this.time = response.data.time;
                    this.id = response.data.id;
                } else {
                    console.error("Status is not 1:", response.data);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        },

        async getTextId(id) {
            this.popupIndex.id = id;

            try {
                const response = await axios.post(api2, {
                    id: this.popupIndex.id,
                });
                if (response.data.status == 1) {
                    this.popupIndex.title = response.data.title;
                    this.popupIndex.time = response.data.time;
                    this.popupIndex.text = response.data.content;

                    this.popupIndex.visible = true;
                } else {
                    console.error("Status is not 1:", response.data);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        },

        async page(num) {
            if (num >= 1 && num <= this.totalPages) {
                this.currentPage = num;

                try {
                    const response = await axios.post(api, {
                        pageType: this.sec02Index.currentTab,
                        pageNum: num,
                    });

                    if (response.data.status == 1) {
                        this.span = response.data.span;
                        this.title = response.data.title;
                        this.time = response.data.time;
                        this.id = response.data.id;
                    } else {
                        console.error("Status is not 1:", response.data);
                    }
                } catch (error) {
                    console.error("Error:", error);
                }
            }
        },

        // menu
        addActive(tabNumber) {
            this.menu.activeTab = tabNumber;
        },
        handleScroll() {
            const currentScroll = window.scrollY;
            const offset = 100; // 設定的偏移值

            document.querySelectorAll(".section").forEach((section, index) => {
                const sectionId = `section${index + 1}`;
                const sectionElement = document.getElementById(sectionId);

                if (sectionElement) {
                    const sectionTop = sectionElement.offsetTop - offset;
                    const sectionBottom =
                        sectionTop + sectionElement.offsetHeight + 2 * offset;

                    if (
                        currentScroll >= sectionTop &&
                        currentScroll < sectionBottom
                    ) {
                        this.menu.activeTab = index + 1;
                    }
                }
            });
        },

        // 偵測ios / android  /pc
        detectDevice() {
            const ua = navigator.userAgent;
            this.menu.isAndroid =
                ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
            this.menu.isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        },

        popupIndexShowShow() {
            document.documentElement.style.overflow = "hidden";
            this.popupIndex.visible = true;
        },
        closePopup() {
            document.documentElement.style.overflow = "auto";
            this.popupIndex.visible = false;
        },
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 2000);

        this.getCurrentTabData("new");

        // this.popupIndexShowShow(1);
        window.addEventListener("scroll", this.handleScroll);
        this.detectDevice();
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
});

app.mount("#app");
