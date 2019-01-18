<template>
    <div>
        <textarea v-model="message" placeholder="edit me"></textarea>
        <div v-for="msg1 in msg">
            <label>
            <input type="radio" name="id" v-model="picked" :value="msg1">
                {{msg1}}
            </label>
        </div>
        {{picked}}
    </div>
</template>

<script>
    export default {
        name: "GetDataLayer",
        data: function() {
            return {
                message: '',
                picked: ''
            }
        },
        computed: {
            msg: function(){
                try{
                    var jsonstring = this.message.replace(/'/g, '"')
                    var obj = JSON.parse(jsonstring)
                    return Object.keys(obj)
                }catch(e){
                    return []
                }
                // var obj = JSON.parse(this.message)
                // return Object.keys(obj)
                // return JSON.stringify(JSON.parse(this.message), null, '')
            }
        }
    }
</script>