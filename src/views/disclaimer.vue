<template>
  <div class="disclaimer-container">
    <h1>Disclaimer</h1>
    <p>
      本站是基于 qier222 免费开源的
      <a
        href="https://github.com/qier222/YesPlayMusic"
        target="_blank"
        rel="noopener noreferrer"
        >YesPlayMusic</a
      >
      播放器的第三方音乐网站。
    </p>
    <p>
      本站的所有功能以及浏览均完全免费，本站的收入将完全用于对本站进行日常维护开销，本站相关人员不会以任何名义向用户强制索取任何非用于上述用途的财物或相关利益本站所提供的信息，均由本站相关用户上传提供，因此只供参考之用，本站相关人员一概对本站以任何方式就任何信息传递或传送的失误以及其合法性概不负责，亦不承担任何法律责任。
    </p>
    <p>
      本站部分功能将使用 Cookie
      与本地缓存。您可以通过修改浏览器设置的方式禁止本站使用
      Cookie，您也可以在浏览器中清空本地缓存。如果您选择禁止 Cookie
      或清除本地缓存，则可能导致您部分自定义的数据丢失或部分功能无法使用，敬请知晓。本站不会在任何情况下向第三方提供或分享任何基于
      Cookie 与本地缓存的用户信息。
    </p>
    <p>
      Music 承诺不会保存你的任何账号信息到云端。你的密码会在本地进行 MD5
      加密后再传输到网易云 API。并且 Music
      是完全开源的每一行代码都公开接受任何安全审计。但是 Music
      并非网易云官方网站，输入账号信息前请慎重考虑。
    </p>
    <ButtonTwoTone
      color="grey"
      style="margin-top: 2em"
      @click.native="go('back')"
    >
      <template v-slot:icon>
        <i-fluent:arrow-left-12-filled />
      </template>
      <template v-slot:text> 返回上一页 </template>
    </ButtonTwoTone>
  </div>
</template>

<script>
export default {
  name: 'Disclaimer',
  methods: {
    go(where) {
      if (where === 'back') this.$router.go(-1)
      else this.$router.go(1)
    },
  },
}
</script>

<style lang="scss" scoped>
.disclaimer-container {
  h1,
  p {
    color: var(--color-text);
  }

  h1 {
    font-size: 56px;
    margin-bottom: 1rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid rgba(128, 128, 128, 0.18);
    transition: border-color 0.3s;
  }

  h1:first-child + p {
    margin-top: 2rem;
  }

  p {
    font-size: 16px;
  }
}
</style>
