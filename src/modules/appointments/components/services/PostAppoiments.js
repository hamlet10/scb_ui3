import {ref} from 'vue'


class PostAppoiments {

    constructor(){
        this.posts = ref([]);
    }

    get Posts(){
        return this.posts;
    }
    async fetchAll(){
        try{ 
            const url = 'https://localhost:44324/api/Appointment';
            // const url = 'http://localhost:3000/Appointment';
            const response = await fetch(url);
            const json = await response.json();
            this.posts.value = await json;

        }catch(err) {
            console.log(err);
        }
    }
    async updateStatusAppointment(post){
        try{
            const url = `https://localhost:9001/api/Appointment/${post.id}`
            let status;
            if (post.status != 1) {
                status = 0
            } else {
                status = 1
            }
            let text = {
                "id": post.id,
                "from": post.from,
                "to": post.to,
                "host": post.host,
                // "dateTime": post.dateTime,
                "status": status,
                "checkIn": post.checkIn,
                "checkOut": post.checkOut,
                "studentId": post.studentId,
                // "studentName": post.studentName,
                // "studentLastName": post.studentLastName,
                "roomId": post.roomId
            }
            await fetch(url, {
                method: 'PUT',
                body : JSON.stringify(text),
                headers: {
                'Content-Type': 'application/json-patch+json'
                }
            }).then((response) => response.json());
        }catch(err) {
            console.log(err);
        }
    }
    async addAppointment(post){

        try {
            let status;
            const url = 'http://localhost:3000/Appointment'
            if (post.status != 1) {
                status = 0
            } else {
                status = 1
            }
            let text = {
            //   dateTime: new Date(Date.now()),
              from: post.startTime.toLocaleString(),
              to: post.endTime.toLocaleString(),
              roomId: null,
              host: 1059560,
              studentId: 1059560,
            //   studentName: "Endy",
            //   studentLastName: "Infante",

              checkIn: null,
              checkOut: null,
              status: post.status,
              Options: false,
            };
            await fetch(url, {
                method: 'POST',
                body : JSON.stringify(text),
                headers: {
                'Content-Type': 'application/json'
                }
            }).then((response) => {
                console.log(text),
                response.json()
            });
        } catch (error) {
            console.log(err);
        }
    }
}


export default PostAppoiments