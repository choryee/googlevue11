/* eslint-disable */ 
<template>
    <div>
        <h1>Your coordinates:</h1>
        <p >{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
        <GmapMap
          :center="{lat:10, lng:10}"
          :zoom="7"
          style="width: 640px; height: 360px;"
        ></GmapMap>  
    </div>
</template>

<script>
import { GmapMap } from "vue2-google-maps";
/* eslint-disable */ 
    export default{
        components: {
            GmapMap
        },
        data(){
            return {
                coordinates:{
                    lat:0,
                    lng:0
                }
            }
        },
        created (){
            this.$getLocation({})
                .then(coordinates =>{
                    this.coordinates=coordinates;
                })
                .catch(error=>alert(error))
        }
    }
</script> 

