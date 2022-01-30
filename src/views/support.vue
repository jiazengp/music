<template>
  <div class="support">
    <h1>支持作者</h1>
    <p>
      Music 是采用 MIT 许可的开源项目，使用完全零广告并且完全免费。
      但是随着项目规模和用户数量的持续增长，也需要有相应的资金支持才能持续项目的维护和开发。
      你可以通过下列的方法来支持作者的开发与维护：
    </p>
    <div class="container-pay">
      <img src="../../public/img/sponsor/qq.jpg" alt="QQ Pay" />
      <img src="../../public/img/sponsor/wx.jpg" alt="WeChat Pay" />
      <img src="../../public/img/sponsor/zfb.jpg" alt="Ali Pay" />
    </div>
    <p>不论多少金额，都非常感谢你的支持！(^_^)</p>
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
.support {
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

  .container-pay {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 267px;
      height: auto;
    }
  }
}
</style>
