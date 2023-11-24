// Revenue by Week
let ctx__Revenue__week = document.getElementById('linechart__Revenue__week').getContext('2d');
        new Chart(ctx__Revenue__week, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Revenue:',
                    data: [108500000,168000000,255500000,122500000,203000000,304500000,217000000],
                    pointBorderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(201, 36, 89, 1)'
                    ],
                    pointRadius: 10,
                    borderWidth: 4,  
                    borderColor: 'rgba(112, 255, 152, 0.5)',
                    tension: 0.5, 
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Revenue by Day',
                        font: {
                            size: 30
                        }
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


// sp by Week
let ctx__sp__week = document.getElementById('barchart__sp__week').getContext('2d');
        new Chart(ctx__sp__week, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Quantity',
                    data: [31, 48, 73, 35, 58, 87, 62],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(201, 36, 89, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(201, 36, 89, 1)'
                    ],
                    borderWidth: 2,
                    borderRadius: 15                
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Numbers of Jordan sold by Day',
                        font: {
                            size: 30
                        }
                    },
                    legend: {
                        display: false
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

