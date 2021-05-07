

const worldMapMixin = {
   data: () => ({
      states: [
         "2021","2020","2019","2018","2017","2016",
         "2015","2014","2013","2012","2011","2010",
         "2009","2008","2007","2006","2005","2004"
       ],
      chartOptions: {

       },
       snack: {
         snackbar: false,
         text: '',
         timeout: 2000,
         color:'secondary',
       },
       foodsSelect:'',
       itemsFoodsSelect:[]
   })
}

export default worldMapMixin;