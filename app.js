const data= {
    labels: ['Jan', 'Feb', 'March', 'Apr', 'May', 'June'],
    datasets: [{
      label: 'Revenue (Crores)',
      data: [45, 52, 35, 78, 46, 95],
      borderWidth: 1
    }]
  }




const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const revenueChart = document.getElementById("chart")
  new Chart(revenueChart, config)