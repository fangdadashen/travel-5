<template>
<div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-alphabet :cities='cities' @change='HandleClickLetter'></city-alphabet>
    <city-list :cities='cities' :hotCities='hotCities' :letter='letter'></city-list>
</div>
</template>

<script>
import CityHeader from './component/header'
import CitySearch from './component/search'
import CityList from './component/list'
import CityAlphabet from './component/alphabet'
import axios from 'axios'

export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        HandleClickLetter(letter){
            this.letter=letter;
        },
        getCityInfo(){
            axios.get('static/assets/city.json')
              .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            res=res.data;
            if(res.ret&&res.data){
                const data=res.data;
                this.cities=data.cities;
                this.hotCities=data.hotCities
            }
        },
        handleLetterChange(letter){//接收alphabet组件的传值,再赋予data
            this.letter=letter;
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>

<style scoped>

</style>