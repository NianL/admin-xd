var MixinGlobal = {
  data() {
    return {};
  },
  created() {},
  methods: {
    m_alert(msg) {
      this.$alert(msg, "", {
        confirmButtonText: '确定',
        callback: (action) => {}
      })
    },
    m_confirm(msg) {
      return this.$confirm(msg, '提示', {
        center: true,
        type: "warning",
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      });
    }
  }
};

export default MixinGlobal;
