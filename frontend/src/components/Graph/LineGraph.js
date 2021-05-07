import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ["options"],
  mounted() {
    // this.chartData é criado no mixin.
    // Se você deseja passar opções, crie um objeto de opções locais
    this.renderChart(this.chartData, this.options);
  }
};