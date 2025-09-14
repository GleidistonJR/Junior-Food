import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Aqui você registra os "módulos" que pretende usar
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export function GraficoPedidos() {
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    datasets: [
      {
        label: "Pedidos",
        data: [12, 19, 9, 15, 22, 25, 30], // <- aqui você depois troca por dados da sua API Django
        backgroundColor: "#00ac34",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return <Bar data={data} options={options}  />;
}

export function RelatorioPedidos() {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Des"],
    datasets: [
      {
        label: "Pedidos",
        data: [12, 15, 10, 15, 25, 15, 12, 15, 11, 13, 11, 25,], // <- aqui você depois troca por dados da sua API Django
        backgroundColor: ["#D94427", "#D95127", "#D9CD27", "#D9B827", "#27D9CD", "#279ED9", "#D92756", "#411282", "#7E8212", "#82122C", "#7B1282", "#074A1C"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return <Pie  data={data} options={options}  />;
}

export function RelatorioFinanceiro() {
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Des"],
    datasets: [
      {
        label: "Pedidos",
        data: [12, 15, 10, 15, 25, 15, 12, 15, 11, 13, 11, 25,], // <- aqui você depois troca por dados da sua API Django
        backgroundColor: "#515151",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return <Bar  data={data} options={options}  />;
}
