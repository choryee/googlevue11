<template>
  <div>
    <div style="display: flex; align-items: center; justify-content: space-between;">
      <div>
        <h1>Your coordinates:</h1>
        <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
      </div>
      <div>
        <h1>Map coordinates:</h1>
        <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
      </div>
    </div>
    
    <Map
      :center="myCoordinates"
      :zoom="zoom"
      style="width: 640px; height: 360px; margin: 32px; auto;"
      ref="mapRef"
      @dragend="handleDrag"
    ></Map>
  </div>
</template>

<script>
/* eslint-disable */
//"vue2-google-maps"를 Map으로 받음. 강의처럼 안 되서.
import { Map } from "vue2-google-maps";

export default {
  components: {
    Map
  },

  data() {
    return {
      map:null,
      myCoordinates: {
        lat: 0,
        lng: 0
      },
      zoom:7
    };
  },

  created() { // 이 부분은 강의와 다름.
    

    if(localStorage.center){
      this.myCoordinates=JSON.parse(localStorage.center)
    }else{
      if (navigator.geolocation && navigator.geolocation.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.myCoordinates.lat = position.coords.latitude;
          this.myCoordinates.lng = position.coords.longitude;
        },
        error => {
          console.error("Error getting current position:", error);
          // Handle error, set default coordinates, or show error message
        }
      );
    } else {
      console.error("Geolocation API is not supported.");
      // Handle case when geolocation is not supported
    }
    }


    if(localStorage.zoom){
      this.zoom=parseInt(localStorage.zoom);
    }

  },

  mounted(){
    this.$refs.mapRef.$mapPromise.then(map=>this.map=map);
  },

  methods:{
    handleDrag(){
      let center={
        lat:this.map.getCenter().lat(),
        lng:this.map.getCenter().lng()
      };
      let zoom=this.map.getZoom();

      localStorage.center=JSON.stringify(center);
      localStorage.zoom=zoom;
    }
  },

  computed:{
    mapCoordinates(){
      if(!this.map){
        return{
          lat:0,
          lng:0
        }
      }
      return{
        lat:this.map.getCenter().lat().toFixed(4),
        lng:this.map.getCenter().lng().toFixed(4)
      }
    }
  }


}
</script>
