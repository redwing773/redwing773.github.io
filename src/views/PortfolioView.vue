<template>
  <div class="portfolio" ref="container">
    <header class="p-header">
      <div class="inner">
        <h1 class="p-logo">CHAE JI MIN</h1>
        <nav class="p-nav">
          <router-link to="/news" class="nav-link">Hacker News</router-link>
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#work" class="nav-link">Work</a>
        </nav>
      </div>
    </header>

    <main class="p-main">
      <!-- Hero Section -->
      <section id="about" class="p-hero">
        <div class="inner">
          <div class="hero-content">
            <h2 class="hero-title">
              <span class="line">사용자 경험을 디자인하는</span>
              <span class="line highlight">프론트엔드-퍼블리셔 <span class="name">채지민</span>입니다.</span>
            </h2>
            <p class="hero-desc">
              섬세한 마크업과 생동감 넘치는 인터랙션을 통해<br>
              가치 있는 웹 서비스를 만들어갑니다.
            </p>
            <div class="hero-btns">
              <a href="#work" class="btn btn-primary">프로젝트 보기</a>
              <!-- <a href="/file/이력서_채지민_20201231.pdf" target="_blank" class="btn btn-outline">이력서 다운로드</a> -->
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="p-section p-skills">
        <div class="inner">
          <h3 class="section-title">SKILLS</h3>
          <div class="skill-list">
            <div v-for="skill in skills" :key="skill.name" class="skill-item">
              <div class="skill-icon">
                <img :src="skill.icon" :alt="skill.name">
              </div>
              <span class="skill-name">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Work Experience Section -->
      <section id="work" class="p-section p-work">
        <div class="inner">
          <h3 class="section-title">PROJECTS</h3>
          <div class="work-grid">
            <article v-for="(project, index) in projects" :key="index" class="work-card">
              <div class="work-img">
                <img v-if="project.image" :src="project.image" :alt="project.title">
                <div v-else class="img-placeholder">{{ project.title }}</div>
              </div>
              <div class="work-info">
                <h4 class="work-title">{{ project.title }}</h4>
                <p class="work-desc">{{ project.description }}</p>
                <ul class="work-details">
                  <li v-if="project.role"><strong>Role:</strong> {{ project.role }}</li>
                  <li v-if="project.tech"><strong>Tech:</strong> {{ project.tech }}</li>
                </ul>
                <div class="work-links">
                  <a v-if="project.url" :href="project.url" target="_blank" class="work-link">Live View <i class="icon-link"></i></a>
                  <a v-if="project.git" :href="project.git" target="_blank" class="work-link">GitHub <i class="icon-github"></i></a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="p-section p-contact">
        <div class="inner">
          <h3 class="section-title">CONTACT</h3>
          <div class="contact-content">
            <p>함께 성장할 수 있는 기회를 기다립니다.</p>
            <div class="contact-links">
              <a href="mailto:redwing773@naver.com" class="contact-item">
                <span class="icon">📧</span>
                redwing773@naver.com
              </a>
              <a href="https://github.com/redwing773" target="_blank" class="contact-item">
                <span class="icon">🐙</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="p-footer">
      <div class="inner">
        <p>&copy; 2024 Chae Ji Min. Portfolio built with Vue.js</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const publicPath = process.env.BASE_URL;

const skills = [
  { name: 'HTML5', icon: `${publicPath}images/html5.png` },
  { name: 'CSS3', icon: `${publicPath}images/css3.png` },
  { name: 'JavaScript', icon: `${publicPath}images/js.png` },
  { name: 'Vue', icon: `${publicPath}images/vue.png` },
  { name: 'React', icon: `${publicPath}images/react.png` },
];

const projects = [
  {
    title: '이투스 학원 브랜드 사이트 운영',
    description: '청솔학원, 강남하이퍼학원 등 이투스 오프라인 브랜드 사이트 전체 구축 및 운영, 프로모션 작업.',
    role: '구축, 운영, 전체 페이지 관리, 프로모션 페이지 제작',
    tech: 'HTML/SCSS, JavaScript, NUXT3, GSAP, Swiper',
    url: 'https://cheongsol.etoos.com/',
    image: `${publicPath}images/etoos-cheongsol.webp`,
  },
  {
    title: '이투스 학원 백오피스 사이트 운영',
    description: '청솔학원, 강남하이퍼학원 등 이투스 오프라인 브랜드 사이트 전체 백오피스 구축 및 운영작업.',
    role: '전체 페이지 관리, GSAP 기반 인터랙션 구현',
    tech: 'HTML/SCSS, JavaScript, VUE3, Swiper, ChartJS',
    url: 'https://inside.etoos.com//',
    image: `${publicPath}images/etoos-inside.webp`,
  },
  {
    title: 'DB손해보험 시스템 운영',
    description: '대고객 대표 홈페이지 및 다이렉트 홈페이지, 내부 시스템 등 DB손해보험 전체 웹페이지 유지보수.',
    role: '퍼블리싱 및 UI/UX 개선',
    tech: 'HTML/CSS, jQuery, JavaScript',
    url: 'https://www.idbins.com',
    image: `${publicPath}images/동부화재.jpg`,
  },
  {
    title: 'DB손해보험 다이렉트',
    description: '다이렉트 보험 상품 안내 및 계약 관리 시스템 퍼블리싱.',
    role: 'UI 개발 및 유지보수',
    tech: 'HTML/CSS, JQuery, JavaScript',
    url: 'https://www.directdb.co.kr',
    image: `${publicPath}images/동부화재다이렉트.jpg`,
  },
  {
    title: '롯데 충전형 복지카드 시스템',
    description: '롯데카드 충전식 선불 복지카드 전용 홈페이지 구축.',
    role: '메인 및 상세 페이지 퍼블리싱',
    tech: 'HTML/CSS, JQuery',
    url: 'https://ccpc.lottecard.co.kr',
    image: `${publicPath}images/롯데_충전형복지카드_01_Divice_pc.webp`,
  },
  {
    title: '포스코 SteelTrade e-MarketPlace',
    description: '철강 비즈니스 상생을 위한 온라인 철강 오픈마켓 서비스 구축.',
    role: 'ADMIN 및 제품 상세 페이지 작업 지원',
    tech: 'HTML/CSS, JQuery',
    url: 'https://www.steeltrade.co.kr',
    image: `${publicPath}images/포스코_e-Market_place_01_Divice_pcMo-1.webp`,
  }
];

const container = ref(null);

onMounted(() => {
  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.p-section, .work-card, .skill-item');
  revealElements.forEach(el => {
    el.classList.add('reveal-hidden');
    observer.observe(el);
  });

  if (process.env.VUE_APP_WHERE === 'COMPANY') {
    container.value?.classList.add('company');
  }
});
</script>

<style lang="scss" scoped>
.reveal-hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
.reveal-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>