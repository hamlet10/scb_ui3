import {ref} from 'vue'

class PostAppoiments {

    constructor(){
        this.posts = ref([])
    }

    get Posts(){
        return this.posts
    }
    async fetchAll(){
        try{
            const url = 'http://localhost:3000/appointment'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json

        }catch(err) {
            console.log(err)
        }
    }
}


export default PostAppoiments