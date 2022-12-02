<script lang="ts">
import AboutCard from '@/shared/components/AboutCard.vue';
import { h, provide } from 'vue';

export default {
  data() {
    return {
      technologies: {
        framework: 'Vue3',
        state: 'Pinia',
        script: 'Typescript',
        database: 'Cloud Firestore'
      }
    }
  },
  created() {
    provide('technologies', this.technologies)
  },
  render(){
    return h('div', {class: 'about'}, [
      h('h3', this.$t("about.buildWith")),
      h('br'),
      h(AboutCard)
    ])
  },
  components: { AboutCard }
}
</script>
