<template>
  <p>Register for the event</p>
  <button @click="register">Register here</button>
</template>

<script>
export default{
    props: ['event'],
    methods:{
      register(){
        this.$router.push({
          name:'EventDetails'
        })
      }
    }
}
</script>