<script>
import useRegisterSW from '@/mixins/useRegisterSW'

const intervalMS = 60 * 60 * 1000

export default {
  name: "reload-prompt",
  mixins: [useRegisterSW],
  methods: {
    handleSWManualUpdates(r) {
      r && setInterval(() => {
        r.update()
      }, intervalMS)
    }
  }
}
</script>
