/* ============================================= */
/*              Graph.js                        */
/* ============================================= */

const trafficCanvas = document.getElementById('traffic-chart');

//Traffic Data
let monthlyTrafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
"4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
2500],
        backgroundColor: 'rgba(24, 103, 191, .3)',
        borderWidth: 1,
    }]
};

const trafficOptions = {
    aspectRatio: 2.5,
    
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};

const weeklyTrafficData = {
    labels: ['Sun, 16', 'Mon, 17', 'Tues, 18', 'Wed, 19', 'Thurs, 20', 'Fri, 21', 'Sat, 22'],
    datasets: [{
        label: '# of hits',
        data: [200, 40, 55, 45, 60, 100, 250],
        backgroundColor: 'rgba(24, 103, 191, .3)',
        borderWidth: 1
    }]
}

const dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(24, 103, 191, .3)',
        borderWidth: 1
    }]
};

const hourlyTrafficData = {
    labels: [
        '24:00',
        '1:00',
        '2:00',
        '3:00',
        '4:00',
        '5:00',
        '6:00',
        '7:00',
        '8:00',
        '9:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00'
    ],
    datasets: [{
        label: '# of hits',
        data: [2, 1, 2, 3, 2, 5, 5, 4, 6, 10, 2, 3, 4, 1, 2, 4, 4, 4, 4, 1, 2, 3, 1, 1],
        backgroundColor: 'rgba(24, 103, 191, .3)',
        borderWidth: 1
    }]
};



//Daily Data
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#1867bf',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
            beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
}

//Mobile Data
const mobileCanvas = document.getElementById("mobile-users");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#1867bf',
            '#bf183f',
            '#bfac18'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

//Create Traffic Chart
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: weeklyTrafficData,
    options: trafficOptions
});

//Creates Daily Chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

//Create Mobile Chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//Line Graph Navigation
const trafficNav = document.querySelector('.traffic-nav');
const links = document.getElementsByClassName('traffic-nav-link');
const hourly = document.getElementsByClassName('traffic-nav-link')[0];
const daily = document.getElementsByClassName('traffic-nav-link')[1];
const weekly = document.getElementsByClassName('traffic-nav-link')[2];
const monthly = document.getElementsByClassName('traffic-nav-link')[3];

//Switches between menu selections on  click and changes graph data
trafficNav.addEventListener('click', (e) => {
    let selection = e.target;
    let active = document.querySelector('.active');
    if (selection.className !== 'active' && selection.className !== 'traffic-nav') {
        active.classList.remove('active');
        selection.classList.add('active');
        if (hourly.classList.contains('active')) {
            //Changes the chart to hourly data
            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: hourlyTrafficData,
                options: trafficOptions
            });
        }
        if (daily.classList.contains('active')) {
            //Changes the chart to hourly data
            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: dailyTrafficData,
                options: trafficOptions
            });
        }
        if (weekly.classList.contains('active')) {
            //Changes the chart to hourly data
            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: weeklyTrafficData,
                options: trafficOptions
            });
        }
        if (monthly.classList.contains('active')) {
            //Changes the chart to hourly data
            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: monthlyTrafficData,
                options: trafficOptions
            });
        }
    }
});