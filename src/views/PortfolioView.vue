<template>
  <div id="container" ref="container">
    <div id="wrap">
      <header id="header">
        <div id="banner"></div>
        <div id="header-outer" class="outer">
          <div id="header-title" class="inner">
            <h1 id="logo-wrap">
              <a href="/" id="logo" style="padding:0 20px;font-weight:400;text-shadow: 0 0 1px #000;">프론트엔드 개발자 채지민 입니다</a>
            </h1>
          </div>
          <div id="header-inner" class="inner">
            <nav id="main-nav">
              <a id="main-nav-toggle" class="nav-icon"></a>
              <a class="main-nav-link" href="/">Home</a>
              <!-- <a class="main-nav-link" href="/archives">Archives</a> -->
            </nav>
            <nav id="sub-nav">
              <!-- <a id="nav-rss-link" class="nav-icon" href="/atom.xml" title="RSS Feed"></a> -->
              <a id="nav-search-btn" class="nav-icon" title="Search"></a>
            </nav>
            <div id="search-form-wrap">
              <form action="//google.com/search" method="get" accept-charset="UTF-8" class="search-form"><input
                  type="search" name="q" class="search-form-input" placeholder="Search"><button type="submit"
                  class="search-form-submit">&#xF002;</button><input type="hidden" name="sitesearch"
                  value="redwing773.github.io"></form>
            </div>
          </div>
        </div>
      </header>
      <div class="outer">
        <section id="main">

          <!-- 포트폴리오 : 시작 -->
          <article id="" class="article article-type-post" itemscope="" itemprop="blogPost">
            <div class="article-meta">
              <a href="#" class="article-date">
                <time>2020-12-31</time>
              </a>
            </div>
            <div class="article-inner">
              <header class="article-header">
                <h1 itemprop="name" class="article-title">
                  작업 중.. Vue.JS 프레임워크로 된 사이트로 수정 예정
                </h1>
                <router-link :key="$route.fullPath" :to="`/news`">News API페이지로 이동</router-link>
              </header>
              <div class="article-entry popol" itemprop="articleBody">
                <!-- <a style="display:block;margin:20px 0;text-align:right;" href="" target="_blank">이력서 다운로드</a> -->
                <div class="imgbox">
                  <img src="/images/html5.png" alt="">
                  <img src="/images/css3.png" alt="">
                  <img src="/images/js.png" alt="">
                  <img src="/images/vue.png" width="200" alt="">

                </div>
                <div class="list">
                  <h1 itemprop="name" class="article-title">
                    <!-- 포트폴리오 -->
                  </h1>
                  <dl>
                    <dt>이투스의 주요 사업부 공통 홍보페이지 구축</dt>
                    <dd><a href="https://github.com/redwing773/CommonPage/tree/main/html/portalPage">관련 GIT</a></dd>

                    <dt>이투스 전 서비스 공통GNB</dt>
                    <dd><img alt="">추가예정</dd>
                    
                    <dt>이투스 오프라인 학원사이트 운영</dt>
                    <dd>이투스의 오프라인 학원 브랜드의 전체 홈페이지 유지보수</dd>
                    <dd>역할 : 청솔학원, 강남하이퍼학원, 앤써, 이투스네오, ECI247 학원, 내부 시스템 등 모든 페이지 관리</dd>
                    <dd>청솔학원 URL : <a href="https://cheongsol.etoos.com/" target="_blank">https://cheongsol.etoos.com/</a></dd>
                    <dd>청솔학원 지점 중 1 URL : <a href="https://cheongsol-gangbuk.etoos.com/" target="_blank">https://cheongsol-gangbuk.etoos.com/</a></dd>
                    <dd>강남하이퍼학원 URL : <a href="https://hyperacademy.etoos.com/" target="_blank">https://hyperacademy.etoos.com/</a></dd>
                    <dd>강남하이퍼학원 지점 중 1 URL : <a href="https://hyper-gangnam.etoos.com/" target="_blank">https://hyper-gangnam.etoos.com/</a></dd>
                    <dd>ECI247 학원 URL : <a href="https://247.etoos.com/" target="_blank">https://247.etoos.com/</a></dd>
                    <dd>이투스네오 학원 : <a href="" target="_blank">현재 청솔학원으로 흡수</a></dd>
                    <dd>앤써 : <a href="" target="_blank">현재 청솔학원으로 흡수</a></dd>

                    <dt>DB손해보험 시스템 운영</dt>
                    <dd>DB손해보험의 전체 웹페이지 유지보수</dd>
                    <dd>역할 : 대고객 대표 홈페이지, 다이렉트 대표 홈페이지, 내부 시스템, 챗봇, DM등 DB의 모든 페이지 관리</dd>
                    <dd><span class="bold">Client</span> : DB손해보험<br>
                      대고객 대표 홈페이지 URL : <a href="https://www.idbins.com" target="_blank">https://www.idbins.com</a>
                        <img src="/images/동부화재.jpg" alt="" style="margin-bottom:20px">
                      다이렉트 대표 홈페이지 URL : <a href="https://www.directdb.co.kr" target="_blank">https://www.directdb.co.kr</a>
                      <img src="/images/동부화재다이렉트.jpg" alt="">
                    </dd>

                    <dt>DB손해보험 시스템 운영</dt>
                    <dd>DB손해보험의 전체 웹페이지 유지보수</dd>
                    <dd>역할 : 대고객 대표 홈페이지, 다이렉트 대표 홈페이지, 내부 시스템, 챗봇, DM등 DB의 모든 페이지 관리</dd>
                    <dd><span class="bold">Client</span> : DB손해보험<br>
                      대고객 대표 홈페이지 URL : <a href="https://www.idbins.com" target="_blank">https://www.idbins.com</a>
                        <img src="/images/동부화재.jpg" alt="" style="margin-bottom:20px">
                      다이렉트 대표 홈페이지 URL : <a href="https://www.directdb.co.kr" target="_blank">https://www.directdb.co.kr</a>
                      <img src="/images/동부화재다이렉트.jpg" alt="">
                    </dd>
                    
                    <dt>롯데 충전형 복지카드 시스템 구축</dt>
                    <dd>롯데카드의 충전식 선불 복지카드 전용 홈페이지 구축</dd>
                    <dd>역할 : 메인,상세 등 전반적인 페이지 작업</dd>
                    <dd><span class="bold">Client</span> : 롯데카드 / Launching	2019<br>
                      URL : <a href="https://ccpc.lottecard.co.kr" target="_blank">https://ccpc.lottecard.co.kr</a>
                        <img src="/images/롯데_충전형복지카드_01_Divice_pc.jpg" alt="">
                    </dd>
                    
                    <dt>포스코 SteelTrade 철강 e-MarketPlace 구축</dt>
                    <dd>포스코 주문 외 제품의 온라인 판매와 철강 비즈니스의 상생의 생태계를 위한 철강 오픈마켓 서비스 구축</dd>
                    <dd>역할 : ADMIN 페이지, 제품 상세 페이지, 메인페이지 작업 지원</dd>
                    <dd><span class="bold">Client</span> : 포스코 인터내셔널 / Launching	2019<br>
                      URL	: <a href="https://www.steeltrade.co.kr" target="_blank">www.steeltrade.co.kr</a>
                      <img src="/images/포스코_e-Market_place_01_Divice_pcMo-1.jpg" alt="">
                    </dd>
                  </dl>

                </div>

              </div>
              <footer class="article-footer">
                <!-- <a data-url="" data-id="" class="article-share-link">Share</a> -->
              </footer>
            </div>

          </article>
          <!-- // 포트폴리오 : 끝 -->
        </section>

        <aside id="sidebar">
          <div class="widget-wrap">
            <h3 class="widget-title">Archives</h3>
            <div class="widget">
              <ul class="archive-list">                
                <li class="archive-list-item"><a class="archive-list-link" href="">February 2019</a>
                </li>                
              </ul>
            </div>
          </div>

          <div class="widget-wrap">
            <h3 class="widget-title">Recent Posts</h3>
            <div class="widget">
              <ul>
                <li>
                  <a href="">웹퍼블리셔 채지민 이력</a>
                </li>                
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <footer id="footer">
        <div class="outer">
          <div id="footer-info" class="inner">
            &copy; 2019 채지민<br>
            Powered by <a href="http://hexo.io/" target="_blank">Hexo</a>
          </div>
        </div>
      </footer>
    </div>
    <nav id="mobile-nav">
      <a href="/" class="mobile-nav-link">Home</a>
      <a href="/archives" class="mobile-nav-link">Archives</a>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    if (process.env.VUE_APP_WHERE === 'COMPANY') {
        this.$refs.container.classList.add('company');
      }
  },
}
</script>

<style>

</style>