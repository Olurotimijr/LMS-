document.querySelector('#card').onclick = () =>{
    document.querySelector('#containered').classList.toggle('active');
  }
  
  document.querySelector('#cancel').onclick = () =>{
    document.querySelector('#containered').classList.remove('active');
  }

  let toggle = document.querySelector('.toggle');
         let navigation = document.querySelector('.navigation');
         let main = document.querySelector('.main');

         toggle.onclick = function(){
            navigation.classList.toggle('active');
            main.classList.toggle('active');
         } 




        

        // //  Chart starts here
        // var ctx = document.getElementById('myChart').getContext('2d');
        // var earning = document.getElementById('earning').getContext('2d')
        // var myChart = new CharacterData(ctx, {
        //   type: 'polarArea',
        //   data: {
        //     labels: ['Rena', 'Gopd', 'Gyny', 'A&e', 'opta', 'Burn'],
        //     datasets: [{
        //       label: 'Patients',
        //       data: [120, 19, 57, 15, 562, 3],
        //       backgroundColor: [
        //         'rgba(255, 99, 132, 1)',
        //         'rgba(54, 162, 235, 1)',
        //         'rgba(255, 206, 86, 1)',
        //       ],
        //     }]
        //   },
        //   options: {
        //     responsive:true,
        //   }
        // });




        //       // Bar chart
        // var myChart = new CharacterData(earning, {
        //   type: 'bar',
        //   data: {   
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June' , 'July', 'August' , 'September', 'October', 'November', 'December'],
        //     datasets: [{
        //       label: 'Earnings',
        //       data: [12320, 223419, 43553, 443555, 44562, 34553, 23425, 6788, 43466, 78866, 64778, 24341],
        //       backgroundColor: [
        //         'rgba(255, 99, 132, 1)',
        //         'rgba(54, 162, 235, 1)',
        //         'rgba(255, 206, 86, 1)',
        //         'rgba(75, 192, 192, 1)',
        //         'rgba(153, 102, 255, 1)',
        //         'rgba(255, 159, 64, 1)',
        //         'rgba(255, 99, 132, 1)',
        //         'rgba(54, 162, 235, 1)',
        //         'rgba(255, 206, 86, 1)',
        //         'rgba(75, 192, 192, 1)',
        //         'rgba(153, 102, 255, 1)',
        //         'rgba(255, 159, 64, 1)',
        //       ],
              
        //     }]
        //   },
        //   options: {
        //     responsive:true, 
        //   }
        // });

        