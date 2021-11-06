import { Component, OnInit } from '@angular/core';
import { EstadisticasService } from 'src/app/services/estadisticas.service';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.css']
})
export class SalesSummaryComponent implements OnInit {

  constructor(private estadisticasService: EstadisticasService) { }

  public lineChartData: Array<any> = [
  ];

  ngOnInit(): void {
    this.estadisticasService.obtenerHorariosFavoritos().subscribe(data1=>{
      
      this.lineChartData=[
        {
          data: data1
        }
      ];
      for(const bar of data1){
        this.lineChartLabels.push(bar.x);
      }
      console.log(this.lineChartData);
    });
  }

    // lineChart
   
    public lineChartLabels: Array<string> = [
     
    ];
    public lineChartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,  
                callback: function(value:any, index:any, values:any) {
                  return value + '%';
                },  // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true,
                suggestedMax: 100,   // minimum value will be 0.
            }
        }],
        xAxes: [{
          display: true,
          ticks: {
              callback: function(value:any, index:any, values:any) {
                return value + ' hs';
              },  
          }
      }],
        
    }
    };
    public lineChartColors: Array<Object> = [
      {
        // grey
        backgroundColor: 'rgba(41, 98, 255,0.1)',
        borderColor: '#2962FF',
        pointBackgroundColor: '#2962FF',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#2962FF'
      },
      {
        // dark grey
        backgroundColor: 'rgba(116, 96, 238,0.1)',
        borderColor: '#7460ee',
        pointBackgroundColor: '#7460ee',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#7460ee'
      }
    ];
    public lineChartLegend = false;
    public lineChartType = 'bar';

}
