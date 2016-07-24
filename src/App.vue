<template lang="jade">
  #app
    // ヘッダ
    section.hero.is-primary
      .hero-head
        .container
          nav.nav
            .nav-left
              a.nav-item(v-link="{path: '/'}")
                span vue-boilerplate
    // 本体
    router-view
    // フッタ
    footer.footer
      .container
        .content.has-text-centered
          a(href="https://jp.vuejs.org/")
            p Powered by Vue.js
</template>