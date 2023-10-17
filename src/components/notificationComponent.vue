<template lang="">
    <div>
        <button @click="bool = !bool">Змінити повідомлення</button>
        <h3>Повідомлення: <i>{{notification}}</i></h3>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bool: false,
        }
    },
    computed: {
        notification() {
            return this.bool == true ? 'Змінна має значення: true' : 'Змінна має значення: false';
        }
     
    },
}
</script>
<style lang="">
    
</style>